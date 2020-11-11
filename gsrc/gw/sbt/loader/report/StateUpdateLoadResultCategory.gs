package gw.sbt.loader.report

uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.loader.Load
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.bureau.BureauCodes
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.form.PolicyForm

class StateUpdateLoadResultCategory extends LoadResultCategory {

  construct(loads : List<Load>, sbtUpdate : SBTUpdate) {
    super(loads, sbtUpdate)
    ensureDecisionsForApplicableLoadSubjects()
  }

  // Decisions may be "missing" from load subjects for deleted artifacts. In such cases, the subject is based on
  // the current version, which doesn't know the decision for the Comparison to which it belongs.
  private function ensureDecisionsForApplicableLoadSubjects() {
    LoadSubjectsWithDecision
        .where(\subject -> subject.DecisionAndInstructions.Decision == null)
        .each(\subject -> {
          subject.DecisionAndInstructions.Decision = comparisonFor(subject).Decision
        })
  }

  override property get BureauCodes() : List<BureauCodes> {
    var allBureauCodes = SBTUpdate.comparisonsOfType(gw.sbt.model.bureau.BureauCodes)*.CanonicalVersion.toList()
        .where(\bureauCodes -> bureauCodes.IsBureauCode)

    return subjectsOfType(SystemTable)
        .map(\table -> {
          var bureauCodes = SBTUpdate.BureauCodes.firstWhere(\codes -> codes.TableName == table.TableName)
          if(bureauCodes == null) {
            // This will be true if a BureauCodes file has been deleted completely in the incoming SBT
            bureauCodes = allBureauCodes.firstWhere(\codes -> codes.TableName == table.TableName)
          }
          return bureauCodes
        })
        .where(\ codes -> codes != null)
        .orderBy(\codes -> codes.Label)
  }

  override property get Clauses(): List<Clause> {
    // Get all clauses from the load then combine with rejected clauses
    var loadedClauses = subjectsOfType(Clause)
    var loadedClausesPids = loadedClauses*.PublicId.toSet()
    var rejectedClauseComparisons = SBTUpdate.comparisonsOfType(Clause)
        .map(\clauseComparison -> clauseComparison.CanonicalVersion)
        .where(\clause -> SBTUpdate.comparisonFor(clause).DecisionAndInstructions.Decision == UpdateDecision.REJECT)

    rejectedClauseComparisons.each(\clause -> {
      if(not loadedClausesPids.contains(clause.PublicId)) {
        loadedClauses.add(clause)
      }
    })
    return loadedClauses.where(\subj -> subj != null).orderBy(\clause -> clause.Description)
  }

  override function findModifiedBureauCodesWithFilename(filename : String) : BureauCodes {
    return SBTUpdate.comparisonsOfType(gw.sbt.model.bureau.BureauCodes)
        .map(\ bureauCodesComparison -> bureauCodesComparison.New ?: bureauCodesComparison.CanonicalVersion)
        .firstWhere(\ bureauCodes -> bureauCodes.FileName == filename and bureauCodes.Decision != null)
  }

  override property get Forms() : List<PolicyForm> {
    // Get all forms from the load then combine with rejected clauses
    var loadedForms = subjectsOfType(PolicyForm)
    var loadedFormNumbers = loadedForms*.Number.toSet()
    var rejectedFormComparisons = SBTUpdate.comparisonsOfType(PolicyForm)
        .map(\formComparison -> formComparison.CanonicalVersion)
        .where(\form -> SBTUpdate.comparisonFor(form).DecisionAndInstructions.Decision == UpdateDecision.REJECT)

    rejectedFormComparisons.each(\form -> {
      if(not loadedFormNumbers.contains(form.Number)) {
        loadedForms.add(form)
      }
    })
    return loadedForms.where(\subj -> subj != null).orderBy(\form -> form.Description)
  }

  override property get ModifiedRiskEntityFiles() : ConfigurationFile[] {
    return RiskEntityLoads*.ModifiedFiles
  }

  private property get RiskEntityLoads() : List<Load> {
    var riskEntityNames = SBTUpdate.Risks*.Entity
    return loadsOfSubjectType(Entity).where(\ load ->
        entityNamesForLoad(load).hasMatch(\ entityName -> riskEntityNames.contains(entityName)))
  }

  private function entityNamesForLoad(load : Load<Entity>) : Set<String> {
    return load.LoadOps.Ops.map(\ op -> (op.Content as Entity).EntityName).toSet()
  }
}