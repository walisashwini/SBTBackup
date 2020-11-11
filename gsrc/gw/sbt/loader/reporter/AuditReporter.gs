package gw.sbt.loader.reporter

uses gw.sbt.model.UpdateDecision

class AuditReporter {
  var _reportedArtifactsProductModel : List<ReportContent>as ReportedArtifactsProductModel = {}
  var _reportedConfigruationFiles : Map<MessageReporter.ReportMessageSourceType, List<ReportContent>> as ReportedConfigurationFiles = {}
  var _reportedFormPatterns : List<ReportContent> as ReportedFormPatterns = {}
  var _reportedSystemTables : List<SystemTableReportContent> as ReportedSystemTables = {}  // system tables including bureaucodes
  var _reportedModifier : List<ReportContent> as ReportedModifiers = {}  //ModifierLookup
  var _reportedRateFactor : List<ReportContent> as ReportedRateFactors = {}  //RateFactorLookup
  var _reportedPolicyLinePattern : List<ReportContent> as ReportedPolicyLinePattern = {}  //PolicyLinePattern

  function reportSystemTable(name: String, titles : List<String>, content : List<String>, tableDecision : UpdateDecision, decision : UpdateDecision, sourceType :MessageReporter.ReportMessageSourceType) {
    _reportedSystemTables.add(new SystemTableReportContent(name, null, titles, content, sourceType, tableDecision, decision))
  }

  function reportProductModel(owningArtifactIdPath : List<String>, sourceType : MessageReporter.ReportMessageSourceType, message : String) {
    _reportedArtifactsProductModel.add(new ReportContent(owningArtifactIdPath, sourceType, message))
  }

  function reportFormPatterns(content : List<String>, sourceType : MessageReporter.ReportMessageSourceType) {
    _reportedFormPatterns.add(new ReportContent(content, sourceType))
  }

  function reportPolicyLinePattern(content : List<String>, sourceType : MessageReporter.ReportMessageSourceType) {
    _reportedPolicyLinePattern.add(new ReportContent(content, sourceType))
  }

  function reportModifier(content : List<String>, sourceType : MessageReporter.ReportMessageSourceType) {
    _reportedModifier.add(new ReportContent(content, sourceType))
  }

  function reportRateFactor(content : List<String>, sourceType : MessageReporter.ReportMessageSourceType) {
    _reportedRateFactor.add(new ReportContent(content, sourceType))
  }

  function reportConfigurationFiles(content : List<String>, sourceType : MessageReporter.ReportMessageSourceType) {
    if(not _reportedConfigruationFiles.containsKey(sourceType)) {
      _reportedConfigruationFiles.put(sourceType, {})
    }
    _reportedConfigruationFiles.get(sourceType).add(new ReportContent(content, sourceType))
  }

  function getReportedConfigurationFile(sourceType : MessageReporter.ReportMessageSourceType) : List<ReportContent> {
    return _reportedConfigruationFiles.get(sourceType)?:{}
  }

  function clearContent() {
    _reportedArtifactsProductModel.clear()
    _reportedConfigruationFiles.clear()
    _reportedFormPatterns.clear()
    _reportedSystemTables.clear()
    _reportedModifier.clear()
    _reportedRateFactor.clear()
    _reportedPolicyLinePattern.clear()
  }
}
