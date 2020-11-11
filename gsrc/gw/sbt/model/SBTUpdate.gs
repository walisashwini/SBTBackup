package gw.sbt.model

uses gw.sbt.artifacts.bureaus.BureauCodeFileDefinition
uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.model.bureau.BureauCodes
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.form.PolicyForm
uses gw.sbt.model.rating.RateBookContent

class SBTUpdate {
  // TODO: this is actually for customer sbt package metadata (multi state), not the sbtupdate pogo (single state)
  var _metadata : SBTUpdateMetaData as MetaData
  var _clauses : List<Clause> as Clauses = {}
  var _forms : List<PolicyForm> as Forms = {}

  // BureauCodeFileDefinitions is a list of all possible Bureau Code File Definitions
  var _bureauCodeFileDefinitions : List<BureauCodeFileDefinition> as BureauCodeFileDefinitions = {}
  // SystemTables is a list of only the Bureau Code Files that are present in the update package
  var _bureauCodesList : List<BureauCodes> as SystemTables = {}

  var _decisionAndInstructions : DecisionAndInstructions as DecisionAndInstructions
  var _adoptionDate : Date as AdoptionDate
  var _processedDate : Date as ProcessedDate
  var _ratebook : RateBookContent as RateBook

  var _clausesDecisionAndInstructions : DecisionAndInstructions as DecisionAndInstructionsForClauses
  var _formsDecisionAndInstructions : DecisionAndInstructions as DecisionAndInstructionsForForms
  var _riskAttributesDecisionAndInstructions : DecisionAndInstructions as DecisionAndInstructionsForRiskAttributes
  var _stateUpdateBureauCodesDecisionsAndInstructions : DecisionAndInstructions as DIForStateUpdateBureauCodes

  var _risks : Collection<Risk> as Risks = {}

  var _loadReport : DownloadContent as LoadReportContent = null
  var _configurationReport : DownloadContent as ConfigurationReportContent = null
  var _auditReport : DownloadContent as AuditReportContent = null
  var _deviationsReport : DownloadContent as DeviationsReportContent = null
  var _stateUpdateRatingReport : DownloadContent as StateUpdateRatingReportContent = null
  var _conflictFilesZip : DownloadContent as ConflictFilesZipContent
  var _mergedFilesZip : DownloadContent as MergedFilesZipContent

  var comparisonDecisionAndInstructions : Map<String, DecisionAndInstructions> as ComparisonDecisionAndInstructions  = {}
  var _comparisonsByKey : Map<String, Comparison> = {}

  construct() {
    _decisionAndInstructions = new DecisionAndInstructions()
    _clausesDecisionAndInstructions = new DecisionAndInstructions()
    _formsDecisionAndInstructions = new DecisionAndInstructions()
    _riskAttributesDecisionAndInstructions = new DecisionAndInstructions()
    _stateUpdateBureauCodesDecisionsAndInstructions = new DecisionAndInstructions()
  }

  property get HasBureauCodes(): boolean {
    return _bureauCodesList.HasElements
  }

  function getBureauCodes(BureauCodesFileName : String) : BureauCodes {
    return _bureauCodesList?.firstWhere(\bureauCodes -> bureauCodes.FileName == BureauCodesFileName)
  }

  property get BureauCodes () : List<BureauCodes> {
    return _bureauCodesList.where (\ bureauCodes -> bureauCodes.IsBureauCode)
  }

  function registerComparison(comparison : Comparison) {
    _comparisonsByKey.put(
        ComparisonDecisionSource.deriveDecisionAndInstructionsKey(comparison.CanonicalVersion),
        comparison)
  }

  reified function comparisonsOfType<T>(versionType : Type<T>) : List<Comparison<T>> {
    return _comparisonsByKey.Values.where(\ comparison -> comparison.CanonicalVersion typeis T).cast(Comparison<T>)
  }

  reified function comparisonFor<T>(version : T) : Comparison<T> {
    var key = ComparisonDecisionSource.deriveDecisionAndInstructionsKey(version)
    return _comparisonsByKey.get(key) as Comparison<T>
  }

  function resetComparisonsByKey() {
    _comparisonsByKey = {}
  }


  function resetReports() {
    _loadReport= null
    _configurationReport= null
    _auditReport= null
    _deviationsReport= null
    _stateUpdateRatingReport= null
  }
}