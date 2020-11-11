package gw.sbt.loader

uses com.google.common.collect.HashMultiset
uses gw.sbt.artifacts.clauses.ClauseProductModel
uses gw.sbt.artifacts.lookups.ClausePatternLookups
uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.artifacts.versioned.ContainerPropertyConfigType
uses gw.sbt.config.ProductModelConfigContents
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.goal.AvailabilityGoal
uses gw.sbt.loader.goal.AvailabilityGoalGeneratorFactory
uses gw.sbt.loader.io.LoadGenerator
uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.loader.persistence.LoaderEntityReader
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.builder.CurrentClauseBuilder
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.pca.analysis.EffectiveAvailabilityHelper
uses org.slf4j.LoggerFactory

class SBTUpdateToClauseLoadsGenerator {
  var _messageReporter : MessageReporter
  var _currentConfigClauses : List<Clause> = {}

  construct(messageReporter : MessageReporter) {
    _messageReporter = messageReporter
  }

  function createLoads(sbtUpdate : SBTUpdate,
                       adoptedUpdate : SBTUpdate,
                       updateConfigContents : SBTUpdateContents, currentContents : CurrentConfigContents, adoptedConfigContents : SBTUpdateContents,
                       entityReader : LoaderEntityReader = null) : List<Load<Object>> {
    LoggerFactory.getLogger("PCA").info("[Clause loading] - generate availability goals")
    var availabilityGoals = generateAvailabilityGoals(sbtUpdate, adoptedUpdate, currentContents)
    LoggerFactory.getLogger("PCA").info("[Clause loading] - convert from goals to load ops")
    // from list of AvailabilityGoal froms a list of Loads
    var loadLists = availabilityGoals
        .map(\ availabilityGoal -> {
      var pid = availabilityGoal.Subject.PublicId
      var policyLineCode = sbtUpdate.MetaData.Line.Code
      var jurisdiction = sbtUpdate.MetaData.Jurisdiction
      var currentClausePattern = currentContents.getClausePatternFromClauses(pid)
      var newClausePattern = updateConfigContents.getClausePattern(policyLineCode, pid)
      var adoptedClausePattern= adoptedConfigContents?.getClausePattern(policyLineCode, pid)
      var currentClauseEntity = currentContents.getEntity(newClausePattern.ClauseSubType)
      var currentClauseProductModel = new ClauseProductModel(
          currentClausePattern,
          allLookupsFor(currentContents, policyLineCode, jurisdiction, pid),
          false,
          currentContents.ScheduleConfig,
          // [US9378] Note we are getting the subtype from the new clause pattern
          // so we can fetch existing clause entity in the case of clause add.
          // There is an assumption that the clause entity does not change between updates nor changed manually.
          // We also don't handle the case where the clause entity does not exist in client config.
          currentClauseEntity,
          currentContents.getEntityExtension(newClausePattern.ClauseSubType),
          EntityColumnHelper.deriveRootEntityExt(currentClauseEntity, currentContents))

      var clause = sbtUpdate.Clauses.firstWhere( \ clauseInNew -> clauseInNew.PublicId == pid )
      if (clause == null) { // clause in new package could be null if the pattern is removed, or the pattern is not for the IndependentState.
        if (currentClausePattern == null) {  // the clause does not exist in either current or new, only exists in adopted, we don't need to anything.
          return new ArrayList<Load> () // new EmptyLoad()
        } else { // get from current config
          clause = _currentConfigClauses.firstWhere( \ clauseInCurrent -> clauseInCurrent.PublicId == pid )
        }
      }

      var adoptedClauseProductModel = adoptedClausePattern!= null? new ClauseProductModel(
          adoptedClausePattern,
          allLookupsFor(adoptedConfigContents, policyLineCode, jurisdiction, pid),
          clause.IsSchedule,
          adoptedConfigContents.ScheduleConfig,
          adoptedConfigContents.getEntity(newClausePattern.ClauseSubType),
          adoptedConfigContents.getEntityExtension(adoptedClausePattern.ClauseSubType),
          null) : null

      var newClauseProductModel = new ClauseProductModel(
          newClausePattern,
          allLookupsFor(updateConfigContents, policyLineCode, jurisdiction, pid),
          clause.IsSchedule,
          updateConfigContents.ScheduleConfig,
          updateConfigContents.getEntity(newClausePattern.ClauseSubType),
          updateConfigContents.getEntityExtension(newClausePattern.ClauseSubType),
          null)

      var resultClauseProductModel = new AvailabilityGoalAnalyzer(_messageReporter, policyLineCode)
          .createResultClauseProductModel(availabilityGoal, currentClauseProductModel, newClauseProductModel,
              adoptedClauseProductModel, sbtUpdate.AdoptionDate, jurisdiction, sbtUpdate.MetaData.CwEdition)

      return new LoadGenerator(_messageReporter)
          .generateLoad(clause, resultClauseProductModel, updateConfigContents, policyLineCode)
    })

    var loads= new ArrayList <Load> ()

    loadLists.each (\loadList -> loads.addAll (loadList))
    return loads.where(\load -> load.LoadOps.HasOps)
  }

  function generateAvailabilityGoals(sbtUpdate : SBTUpdate,
                                              adoptedUpdate : SBTUpdate,
                                              currentContents : CurrentConfigContents): List<AvailabilityGoal> {
    var isStateUpdate = adoptedUpdate != null
    var newClauses = sbtUpdate.Clauses
    if (isStateUpdate or sbtUpdate.MetaData.isIndependentState) { // state-update or independent state
      var adoptedClauses = adoptedUpdate.Clauses
      var unionOfClausePublicIds = adoptedClauses*.PublicId.union(newClauses*.PublicId)
      var missingClausesInIndependentState = {} as List<String>
      if (sbtUpdate.MetaData.isIndependentState) {
        missingClausesInIndependentState = currentContents.getClausePatternIdsWithCWLookup(sbtUpdate.MetaData.Line.Code)
        missingClausesInIndependentState.removeWhere(\pid -> unionOfClausePublicIds.contains(pid))
        unionOfClausePublicIds.addAll(missingClausesInIndependentState)
      }

      _currentConfigClauses = currentConfigClausesFor(unionOfClausePublicIds,
          sbtUpdate.MetaData.Line.Code,
          sbtUpdate.MetaData.Jurisdiction,
          sbtUpdate.AdoptionDate,
          currentContents)
      return unionOfClausePublicIds.map(\pid -> {
        var currentClause = _currentConfigClauses.firstWhere(\clause -> clause.PublicId == pid)
        var adoptedClause = adoptedClauses?.firstWhere(\clause -> clause.PublicId == pid)
        if (!isStateUpdate and sbtUpdate.MetaData.isIndependentState) { //only for independent state add case
          adoptedClause = currentClause
        }
        var newClause = newClauses.firstWhere(\clause -> clause.PublicId == pid)
        var comparison = Comparison.forClause(currentClause, newClause, adoptedClause, ComparisonDecisionSource.create(sbtUpdate))
        sbtUpdate.registerComparison(comparison)
        if(sbtUpdate.MetaData.isIndependentState) {
          var goal = AvailabilityGoalGeneratorFactory.forIndependentStateAddForClause().goalFor(comparison)
          if (missingClausesInIndependentState.contains(pid) and goal.Outcome == AvailabilityGoal.Outcome.UNAVAILABLE) {
            _messageReporter.ConflictReporter.reportWarningForIndependentState(currentClause.Description + " (" + currentClause.FileName + ")", MessageReporter.ReportMessageSourceType.CLAUSE)
          }
          return goal
        } else {
          return AvailabilityGoalGeneratorFactory.forStateUpdateForClause().goalFor(comparison)
        }
      })
    } else { // state-add
      return newClauses
          .map(\ newClause -> AvailabilityGoalGeneratorFactory.forStateAddForClause().goalFor(newClause))
    }
  }

  private function allLookupsFor(configContents : ProductModelConfigContents,
                                 policyLineCode : String,
                                 jurisdiction : String,
                                 clausePublicId : String) : ClausePatternLookups {
    var cwLookups = configContents.getClausePatternLookups(policyLineCode, null, clausePublicId)
    var stateLookups = configContents.getClausePatternLookups(policyLineCode, jurisdiction, clausePublicId)

    validatePublicIds({ cwLookups, stateLookups })
    return ClausePatternLookups.withAllFrom(
        {cwLookups, stateLookups}.where(\ lookups -> (lookups != null and (not lookups.EmptyElement))))
  }

  private function currentConfigClausesFor(
      clauseIds : Set<String>,
      policyLineCode : String,
      jurisdiction : String,
      adoptionDate : Date,
      currentContents : CurrentConfigContents) : List<Clause> {
    var resultClauses = clauseIds.map(\clauseId -> new CurrentClauseBuilder(policyLineCode, currentContents, adoptionDate)
        .toClauseModel(jurisdiction, clauseId))
    resultClauses.removeWhere(\clause -> clause == null)
    EffectiveAvailabilityHelper.setEffectiveAvailabilityOnClause(resultClauses, adoptionDate)
    return resultClauses
  }

  static private function validatePublicIds(lookupsList : List<ClausePatternLookups>) {
    var allLookups = lookupsList
        .where(\ lookups -> lookups != null)
        .flatMap(\ lookups -> lookups.AllLookups)
    var publicIds = HashMultiset.create(allLookups*.PublicId.toList())
    var duplicatePublicIds = publicIds.entrySet()
        .where(\ entry -> entry.Count > 1)
        .map(\ entry -> entry.Element)
    if (duplicatePublicIds.HasElements)
      throw new IllegalArgumentException("Lookups found with duplicate ID: " + duplicatePublicIds.join(", "))
  }

}