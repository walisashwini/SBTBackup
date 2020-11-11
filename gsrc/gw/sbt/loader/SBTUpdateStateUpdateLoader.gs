package gw.sbt.loader

uses gw.sbt.artifacts.SbtCommonContents
uses gw.sbt.artifacts.properties.ProductModelDisplayProperties
uses gw.sbt.artifacts.versioned.ContainerPropertyConfigType
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.TargetConfiguration
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.io.SbtCommonContentsAddition
uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.loader.persistence.LoaderEntityReader
uses gw.sbt.loader.report.AuditReportWriter
uses gw.sbt.loader.report.ConfigurationReportWriter
uses gw.sbt.loader.report.DeviationsReportWriter
uses gw.sbt.loader.report.LoadReportWriter
uses gw.sbt.loader.report.LoadResult
uses gw.sbt.loader.report.StateUpdateRatingReportAdapter
uses gw.sbt.loader.report.StateUpdateRatingReportWriter
uses gw.sbt.loader.reporter.ConfigurationFileZipper
uses gw.sbt.loader.reporter.ConflictReporter
uses gw.sbt.loader.stateupdate.PolicyLinePatternLoadGenerator
uses gw.sbt.loader.stateupdate.ProductLoadGenerator
uses gw.sbt.loader.stateupdate.RateBookLoadGenerator
uses gw.sbt.loader.stateupdate.SystemTablesLoadGenerator
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.builder.CurrentRateBookBuilder
uses gw.sbt.model.builder.CurrentSBTUpdateBuilder
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.pca.view.presenter.compare.StateUpdateBureauCodesRowPresenter
uses org.slf4j.LoggerFactory

class SBTUpdateStateUpdateLoader extends SBTUpdateLoader {
  var _currentUpdate: SBTUpdate as CurrentUpdate
  var _latestAdoptedUpdate: SBTUpdate as LatestAdoptedUpdate
  var _allSystemTablePresenters : List<StateUpdateBureauCodesRowPresenter>

  construct(config: TargetConfiguration, entityReader: LoaderEntityReader, lastAdoptedSBTUpdate:SBTUpdate,stateUpdateRatingReportAdapter : StateUpdateRatingReportAdapter) {
    super(config, entityReader)
    _latestAdoptedUpdate = lastAdoptedSBTUpdate
    _stateUpdateRatingReportAdapter = stateUpdateRatingReportAdapter
  }

  function withSystemTablePresenters(allSystemTablePresenters : List<StateUpdateBureauCodesRowPresenter>) : SBTUpdateStateUpdateLoader {
    _allSystemTablePresenters = allSystemTablePresenters
    return this
  }

  override function firstPassLoad(
      sbtUpdate : SBTUpdate,
      updateContents : SBTUpdateContents,
      currentContents: CurrentConfigContents,
      adoptedContents: SBTUpdateContents,
      currentEntityConfig : CurrentEntityConfig
  ) {

    var policyLine = sbtUpdate.MetaData.Line.Code
    var jurisdiction = sbtUpdate.MetaData.Jurisdiction
    var currentConfigMetaData = sbtUpdate.MetaData.getCombinedMetaDataBasedOn(_latestAdoptedUpdate.MetaData)
    _currentUpdate = CurrentSBTUpdateBuilder.getSBTUpdateInBuilder(currentConfigMetaData)

    sbtUpdate.ProcessedDate = Date.Today

    addSbtCommonContentsLoad(updateContents, currentContents)

    addClauseLoads(currentContents, updateContents, adoptedContents, sbtUpdate, LatestAdoptedUpdate)

    addFormLoads(currentContents, updateContents, adoptedContents, sbtUpdate, LatestAdoptedUpdate)

    addRateBookLoad(sbtUpdate, currentContents, updateContents, adoptedContents, jurisdiction, sbtUpdate.AdoptionDate, policyLine)

    addConfigurationFiles(currentContents, sbtUpdate, updateContents, adoptedContents, jurisdiction, policyLine)

    addScheduleConfigLoads(currentContents, updateContents, adoptedContents, sbtUpdate, jurisdiction)

    addEntityLoads(currentContents, updateContents, currentEntityConfig)

    addTypeListLoads(currentContents, updateContents)

    addGosuFileLoads(currentContents, updateContents, adoptedContents)

    addPcfFileLoads(currentContents, updateContents, adoptedContents)

    addDisplayProperties(currentContents, updateContents, adoptedContents)

    addPolicyLinePatternLoad(currentContents, updateContents, jurisdiction, sbtUpdate.AdoptionDate)

    addSystemTableLoad(currentContents, updateContents, sbtUpdate, jurisdiction, sbtUpdate.AdoptionDate)

    reportProductConflict(currentContents, updateContents)

    addDiffTreeDeltas(currentContents, updateContents)

    addLookupTablesDeltas(currentContents, updateContents)

    addXsdFileLoads(currentContents, updateContents, adoptedContents)

    addPluginFileLoads(currentContents, updateContents, adoptedContents)

    ExistenceConfigCache.getInstance().clear()
  }

  override function secondPassLoad(sbtUpdate: SBTUpdate, updateContents: SBTUpdateContents, currentContents: CurrentConfigContents, adoptedContents: SBTUpdateContents) {
     var jurisdiction = sbtUpdate.MetaData.Jurisdiction
     resolveSchedulePropertyEntityColConflicts(currentContents, jurisdiction)
  }

  override function generateReports(sbtUpdate: SBTUpdate, currentPmDisplayProperties: ProductModelDisplayProperties) {
    var loadResult = LoadResult.forStateUpdate(_loadsForReport, sbtUpdate)
    var loadReportWriter= new LoadReportWriter(_writer, sbtUpdate, loadResult, LatestAdoptedUpdate.MetaData, MessageReporter)
    loadReportWriter.write()
    this.LoadReport = loadReportWriter.LoadReport
    new DeviationsReportWriter(_writer, sbtUpdate, LatestAdoptedUpdate.MetaData, MessageReporter).write()
    var configReportWriter = new ConfigurationReportWriter(_writer, sbtUpdate, loadResult, LatestAdoptedUpdate.MetaData, MessageReporter)
    configReportWriter.write()
    this.ConfigurationReport = configReportWriter.ConfigurationReport

    if (_stateUpdateRatingReportAdapter != null) {
      new StateUpdateRatingReportWriter(_writer, _stateUpdateRatingReportAdapter, sbtUpdate, LatestAdoptedUpdate.RateBook, LatestAdoptedUpdate.MetaData).write()
    }
    new AuditReportWriter(_writer, sbtUpdate, loadResult, LatestAdoptedUpdate.MetaData, MessageReporter){:CurrentPmDisplayProperties = currentPmDisplayProperties}.write()
  }

  override function addLobFieldMetaConfig(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents, adoptedContents : SBTUpdateContents, newUpdate : SBTUpdate,
                                         jurisdiction : String, adoptionDate : Date) {
    LoggerFactory.getLogger("PCA").info("Loading lob-field-meta.xml")

    var adoptedRisks = LatestAdoptedUpdate.Risks
    var newRisks = newUpdate.Risks
    var riskNames = adoptedRisks*.Name.toList().union(newRisks*.Name.toList())
    CurrentSBTUpdateBuilder.buildRisks(riskNames, CurrentUpdate, adoptionDate, _config)

    var riskComparisons = riskNames.map(\riskName -> {
      var adoptedRisk = adoptedRisks.firstWhere(\risk -> (risk.Name == riskName or risk.Entity == riskName))
      var newRisk = newRisks.firstWhere(\risk -> (risk.Name == riskName or risk.Entity == riskName))
      var currentRisk = CurrentUpdate.Risks.firstWhere(\risk -> (risk.Name == riskName or risk.Entity == riskName))
      var riskComparison = Comparison.forRisk(currentRisk, newRisk, adoptedRisk,
          ComparisonDecisionSource.create(newUpdate))
      newUpdate.registerComparison(riskComparison)
      return riskComparison
    })

    if (not riskComparisons.Empty) {
      var decisionsMap = new HashMap<String, UpdateDecision>()
      riskComparisons.each(\comparison -> SBTUpdateLoader.createDecisionsMap(comparison, decisionsMap))

      //toggle the 'available' of riskattribute by decision.
      var lobFieldMetaInNewUpdate = updateContents.LobFieldMetaConfig
      if (lobFieldMetaInNewUpdate != null) {
        newRisks.each(\risk ->
          risk.RiskAttributes
              .where(\riskAttribute -> {
                var decisionKey = ComparisonDecisionSource.deriveDecisionAndInstructionsKey(riskAttribute)
                if (decisionKey != null) {
                  return decisionsMap.get(decisionKey) == UpdateDecision.REJECT
                } else {
                  return false
                }
              })
              .each(\riskAttribute -> lobFieldMetaInNewUpdate.toggleEntityColumnVisibility(risk.Entity, riskAttribute.Code, jurisdiction)))
      }
      addContainerPropertyConfig(currentContents, updateContents, adoptedContents, jurisdiction, newUpdate.MetaData.isIndependentState,
          newUpdate.AdoptionDate, ContainerPropertyConfigType.LOB_FIELD_META, lobFieldMetaInNewUpdate, decisionsMap)
    }
  }

  override function addValueDependencyConfig(currentContents: CurrentConfigContents, sbtUpdateContents: SBTUpdateContents, adoptedContents: SBTUpdateContents,
                                             jurisdiction : String, adoptionDate: Date, isIndependentState : boolean) {
    LoggerFactory.getLogger("PCA").info("Loading value-dependency-config.xml")

    var valueDepConfigInUpdate = sbtUpdateContents.ValueDependencyConfig
    if (valueDepConfigInUpdate != null) {
      var valueDepConfigInCurrent = currentContents.ValueDependencyConfig
      var valueDepConfigInAdopted = adoptedContents.ValueDependencyConfig
      var load = new ValueDependenciesLoadGenerator(currentContents, sbtUpdateContents, adoptedContents, jurisdiction, adoptionDate, _messageReporter, isIndependentState)
          .generateLoad(valueDepConfigInCurrent, valueDepConfigInUpdate, valueDepConfigInAdopted)
      _loads.add(load)
    }
  }

  protected override function conflictFilesFrom(conflictReporter : ConflictReporter, loads : Loads)
      : List<ConfigurationFile> {
    var results = conflictReporter.FilesWithConflicts.copy()
    var rateBookFile = ConfigurationFileZipper.rateBookFileFrom(loads)
    if (rateBookFile != null)
      results.add(rateBookFile)
    return results
  }

  private function addScheduleConfigLoads(currentContents: CurrentConfigContents, sbtUpdateContents: SBTUpdateContents,adoptedContents: SBTUpdateContents, sbtUpdate : SBTUpdate, jurisdiction : String) : void {
    LoggerFactory.getLogger("PCA").info("Loading Schedules")
    var loads = new ScheduleLoadGenerator(currentContents, sbtUpdateContents, adoptedContents, jurisdiction, sbtUpdate.AdoptionDate, MessageReporter).generateLoads()
    _loads.addAll(loads)
  }

  private function reportProductConflict(currentContents: CurrentConfigContents, updateContents: SBTUpdateContents) {
    LoggerFactory.getLogger("PCA").info("Detect and report product conflict")
    var loadGenerator = new ProductLoadGenerator(currentContents, updateContents, MessageReporter)
    loadGenerator.reportConflict()
  }

  private function addPolicyLinePatternLoad(
      currentContents: CurrentConfigContents,
      updateContents: SBTUpdateContents,
      jurisdiction : String,
      adoptionDate : Date
  ) {
    LoggerFactory.getLogger("PCA").info("Loading PolicyLine Pattern")
    var loadGenerator =  new PolicyLinePatternLoadGenerator(
        :currentContents = currentContents,
        :updateContents = updateContents,
        :jurisdiction = jurisdiction,
        :adoptionDate = adoptionDate,
        :messageReporter = MessageReporter)
    _loads.addAll(loadGenerator.generateLoads())

    if(not MessageReporter.ConflictReporter.HasMissingCurrentPolicyLinePattern) {
      _loads.addAll(loadGenerator.generateLookupLoads())
      var load = loadGenerator.generateModifierMinMaxLoad()
      if (load != null) {
        _loads.add(load)
      }
    }
  }

  private function addSystemTableLoad(
      currentContents: CurrentConfigContents,
      updateContents: SBTUpdateContents,
      sbtUpdate : SBTUpdate,
      jurisdiction : String,
      adoptionDate : Date
  ) {
    LoggerFactory.getLogger("PCA").info("Loading System Tables")
    var loadGenerator = new SystemTablesLoadGenerator(
        :currentContents = currentContents,
        :updateContents = updateContents,
        :jurisdiction = jurisdiction,
        :adoptionDate = adoptionDate,
        :messageReporter = MessageReporter)
    _loads.addAll(loadGenerator.generateLoads(_allSystemTablePresenters, sbtUpdate))
  }

  private function addRateBookLoad(sbtUpdate: SBTUpdate,
                                   currentContents: CurrentConfigContents,
                                   updateContents: SBTUpdateContents,
                                   adoptedContents: SBTUpdateContents,
                                   jurisdiction: String, adoptionDate : Date, policyLine: String) {
    if (sbtUpdate.RateBook != null) {
      LoggerFactory.getLogger("PCA").info("Loading ratebook")
      var adoptedRatebook = _latestAdoptedUpdate.RateBook
      var newRatebook = sbtUpdate.RateBook
      if (_currentRateBook == null) {
        _currentRateBook = new CurrentRateBookBuilder(
            policyLine,
            newRatebook.BookCode,
            jurisdiction,
            adoptionDate).toRateBookModel()
      }
      var rateBookLoad = new RateBookLoadGenerator().generateLoad(sbtUpdate,
          newRatebook,
          adoptedRatebook,
          _currentRateBook,
          currentContents,
          updateContents,
          adoptedContents,
          policyLine, jurisdiction, adoptionDate, sbtUpdate.ProcessedDate)
      _loads.add(rateBookLoad)
    }
  }

  function addSbtCommonContentsLoad(updateContents : SBTUpdateContents, currentContents : CurrentConfigContents) {
    var sbtCommonContentsInCurrent = currentContents.SbtCommonContents
    var sbtCommonContentsInUpdate = updateContents.SbtCommonContents
    if (SbtCommonContents.isReplacementRequired(sbtCommonContentsInCurrent, sbtCommonContentsInUpdate)) {
      var load = new Load<SbtCommonContents>(sbtCommonContentsInUpdate)
      load.add(new SbtCommonContentsAddition(sbtCommonContentsInUpdate))
      _loads.add(load)
    }
  }
}