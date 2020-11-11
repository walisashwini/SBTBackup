package gw.sbt.loader.reporter

uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.artifacts.gosu.GosuFile
uses gw.sbt.artifacts.pcf.PcfFile
uses gw.sbt.artifacts.plugin.PluginFile
uses gw.sbt.artifacts.xsd.XsdFile
uses gw.sbt.config.ConfigurationFile

class ConflictReporter {

  static class Conflict {
    var _reportContent : ReportContent as readonly ReportContent
    var _configurationFile : ConfigurationFile as readonly ConfigurationFile

    construct(reportContent : ReportContent, configurationFile : ConfigurationFile) {
      _reportContent = reportContent
      _configurationFile = configurationFile
    }
  }

  var _conflicts : Map<MessageReporter.ReportMessageSourceType, List<Conflict>> = {}
  var _warningsEntity : List<Conflict> = {}
  var _warningsForIndependentState : Map<MessageReporter.ReportMessageSourceType, List<String>> = {}
  var _conflictForSbtCommonContents : Map<MessageReporter.ReportMessageSourceType, List<String>> = {}
  var _addedForSbtCommonContents : Map<MessageReporter.ReportMessageSourceType, List<String>> = {}
  var _removedForSbtCommonContents : Map<MessageReporter.ReportMessageSourceType, List<String>> = {}

  function reportProductModel(
      owningArtifactIdPath : List<String>,
      sourceType : MessageReporter.ReportMessageSourceType,
      policyLineCode : String
  ) : Conflict {
    var clausePatternCode = owningArtifactIdPath.first()
    var clausePatternFile = ConfigurationFile.clausePattern(clausePatternCode + ".xml", policyLineCode)
    return reportConflict(new ReportContent(owningArtifactIdPath, sourceType), clausePatternFile)
  }

  function reportEntity(entityFileName : String) : Conflict {
    return reportConflict(new ReportContent({entityFileName}, ENTITY),
        ConfigurationFile.entityFromExtensions(entityFileName))
  }

  function reportEntityWarning(entityFileName : String) : Conflict {
    var file = ConfigurationFile.entityFromExtensions(entityFileName)
    var conflict = new Conflict(new ReportContent({entityFileName}, ENTITY), file)
    _warningsEntity.add(conflict)
    return conflict
  }

  function reportWarningForIndependentState(content : String, sourceType : MessageReporter.ReportMessageSourceType) {
    var warningList = _warningsForIndependentState.getOrDefault(sourceType, {})
    warningList.add(content)
    _warningsForIndependentState.put(sourceType, warningList)
  }

  function reportConflictForSbtCommon(content : String, sourceType : MessageReporter.ReportMessageSourceType) {
    var conflictList = _conflictForSbtCommonContents.getOrDefault(sourceType, {})
    conflictList.add(content)
    _conflictForSbtCommonContents.put(sourceType, conflictList)
  }

  function reportAddedForSbtCommon(content : String, sourceType : MessageReporter.ReportMessageSourceType) {
    var addedList = _addedForSbtCommonContents.getOrDefault(sourceType, {})
    addedList.add(content)
    _addedForSbtCommonContents.put(sourceType, addedList)
  }

  function reportRemovedForSbtCommon(content : String, sourceType : MessageReporter.ReportMessageSourceType) {
    var removedList = _removedForSbtCommonContents.getOrDefault(sourceType, {})
    removedList.add(content)
    _removedForSbtCommonContents.put(sourceType, removedList)
  }

  function reportXSD(xsdFile : XsdFile) : Conflict {
    return reportConflict(new ReportContent({xsdFile.FullPathName}, XSD),
        ConfigurationFile.xsdFile(xsdFile.FilePath, xsdFile.FileName))
  }

  function reportPlugin(pluginFile : PluginFile) : Conflict {
    return reportConflict(new ReportContent({pluginFile.FullPathName}, PLUGIN),
        ConfigurationFile.pluginFile(pluginFile.FilePath, pluginFile.FileName))
  }

  function reportPCF(pcfFile : PcfFile) : Conflict {
    return reportConflict(new ReportContent({pcfFile.FullPathName}, PCF),
        ConfigurationFile.pcfFile(pcfFile.FilePath, pcfFile.FileName))
  }

  function reportDiffTreeMissing(productAbbreviation : String) : Conflict {
    return reportConflict(new ReportContent({productAbbreviation}, MISSING_DIFF_TREE),
        ConfigurationFile.diffTree(productAbbreviation))
  }


  function reportLookupTablesConflict(lookupTableMessage : String) : Conflict {
    return reportConflict(new ReportContent({lookupTableMessage}, LOOKUP_TABLES_CONFLICT),
        ConfigurationFile.LookupTablesFile())
  }

  function reportGosu(gosuFile : GosuFile) : Conflict {
    return reportConflict(new ReportContent({gosuFile.FullName}, GOSU),
        ConfigurationFile.gosuFile(gosuFile.FullName, gosuFile.FileExtension))
  }

  function reportDisplayProperty(displayPropertyKey : String, displayPropertiesFile : ConfigurationFile) : Conflict {
    return reportConflict(new ReportContent({displayPropertyKey}, DISPLAY_PROPERTY), displayPropertiesFile)
  }

  function reportProductModelDisplayProperty(displayPropertyKey : String, displayPropertiesFile : ConfigurationFile)
      : Conflict {
    return reportConflict(new ReportContent({displayPropertyKey}, PM_DISPLAY_PROPERTY), displayPropertiesFile)
  }

  function reportSystemTable(systemTableFileName : String) : Conflict {
    return reportConflict(new ReportContent({systemTableFileName}, SYSTEM_TABLE),
        ConfigurationFile.systable(systemTableFileName))
  }

  function reportBureauCode(bureauCodeFileName : String) : Conflict {
    return reportConflict(new ReportContent({bureauCodeFileName}, BUREAU_CODE),
        ConfigurationFile.systable(bureauCodeFileName))
  }

  function reportTypeList(typeList : String) : Conflict {
    return reportConflict(new ReportContent({typeList}, TYPELIST), ConfigurationFile.typelistFromExtensions(typeList))
  }

  function reportProductPattern(productPattern : String) : Conflict {
    return reportConflict(new ReportContent({productPattern + ".xml"}, PRODUCT_PATTERN),
        ConfigurationFile.productPattern(productPattern))
  }

  function reportScheduleConfig(scheduleConfigConflict : String, scheduleConfigFile : ConfigurationFile) : Conflict {
    return reportConflict(new ReportContent({scheduleConfigConflict}, SCHEDULE_CONFIG), scheduleConfigFile)
  }

  function reportPolicyLinePattern(policyLinePattern : String) : Conflict {
    var policyLineFile = policyLinePatternFileFor(policyLinePattern)
    return reportConflict(new ReportContent({policyLineFile.Name}, POLICY_LINE_PATTERN), policyLineFile)
  }

  function reportMissingPolicyLinePattern(policyLinePattern : String) : Conflict {
    var policyLineFile = policyLinePatternFileFor(policyLinePattern)
    return reportConflict(new ReportContent({policyLineFile.Name}, MISSING_CURRENT_POLICY_LINE_PATTERN), policyLineFile)
  }

  function reportFormPattern(formPattern : PolicyFormPattern, message : String) : Conflict {
    var formLabel = "${formPattern.FormNumber} ${formPattern.Edition} ${formPattern.Description}"
    return reportConflict(new ReportContent({"${formLabel} (${message})"}, POLICY_FORM),
        ConfigurationFile.formPatternFile(formPattern.PolicyLinePatternCode))
  }

  function reportModifierMinMaxLookup(modifierPatternCode : String, policyLinePatternCode : String) : Conflict {
    return reportConflict(new ReportContent({modifierPatternCode}, MODIFIER_MIN_MAX_LOOKUP),
        policyLinePatternFileFor(policyLinePatternCode))
  }

  private function policyLinePatternFileFor(policyLinePatternCode : String) : ConfigurationFile {
    return ConfigurationFile.policyLinePattern(policyLinePatternCode + ".xml", policyLinePatternCode)
  }

  function reportExpiredPolicyFormForIndependentState(formNumber : String, expiryVersion : String, fromDescription : String) {
    reportWarningForIndependentState(fromDescription+ " (" + formNumber + (! expiryVersion.Empty? " version " + expiryVersion : "")+ ")", MessageReporter.ReportMessageSourceType.POLICY_FORM)
  }

  property get ConflictsPCF() : List<String> {
    return messagesFor(PCF)
  }

  property get ConflictsEntity() : List<String> {
    return messagesFor(ENTITY)
  }

  property get WarningsEntity() : List<String> {
    return messagesToStrings(_warningsEntity*.ReportContent.toList())
  }

  property get HasWarningsForIndependentState() : boolean {
    return not _warningsForIndependentState.Empty
  }

  public function getWarningsForIndependentState(sourceType : MessageReporter.ReportMessageSourceType) : List<String> {
    return _warningsForIndependentState.getOrDefault(sourceType, {})
  }

  property get HasConflictForSbtCommonContents() : boolean {
    return not _conflictForSbtCommonContents.Empty
  }

  property get HasAddedForSbtCommonContents() : boolean {
    return not _addedForSbtCommonContents.Empty
  }

  property get HasRemovedForSbtCommonContents() : boolean {
    return not _removedForSbtCommonContents.Empty
  }

  public function getConflictForSbtCommonContents(sourceType : MessageReporter.ReportMessageSourceType) : List<String> {
    return _conflictForSbtCommonContents.getOrDefault(sourceType, {})
  }

  public function getAddedForSbtCommonContents(sourceType : MessageReporter.ReportMessageSourceType) : List<String> {
    return _addedForSbtCommonContents.getOrDefault(sourceType, {})
  }

  public function getRemovedForSbtCommonContents(sourceType : MessageReporter.ReportMessageSourceType) : List<String> {
    return _removedForSbtCommonContents.getOrDefault(sourceType, {})
  }

  property get ConflictsGosu() : List<String> {
    return messagesFor(GOSU)
  }

  property get ConflictsXSD() : List<String> {
    return messagesFor(XSD)
  }

  property get ConflictsPlugin() : List<String> {
    return messagesFor(PLUGIN)
  }

  property get ConflictsDiffTree() : List<String> {
    return messagesFor(MISSING_DIFF_TREE)
  }

  property get ConflictsLookupTables() : List<String> {
    return messagesFor(LOOKUP_TABLES_CONFLICT)
  }

  property get ConflictsTypeList() : List<String> {
    return messagesFor(TYPELIST)
  }

  property get ConflictsProductPattern() : String {
    return lastMessageFor(PRODUCT_PATTERN)
  }

  property get ConflictsScheduleConfig() : List<String> {
    return messagesFor(SCHEDULE_CONFIG)
  }

  property get ConflictsDisplayProperty() : List<String> {
    return messagesFor(DISPLAY_PROPERTY)
  }

  property get ConflictsProductModelDisplayProperty() : List<String> {
    return messagesFor(PM_DISPLAY_PROPERTY)
  }

  property get ConflictsPolicyLinePattern() : String {
    return lastMessageFor(POLICY_LINE_PATTERN)
  }

  property get MissingCurrentPolicyLinePattern() : String {
    return lastMessageFor(MISSING_CURRENT_POLICY_LINE_PATTERN)
  }

  property get HasMissingCurrentPolicyLinePattern() : boolean {
    return messagesFor(MISSING_CURRENT_POLICY_LINE_PATTERN).HasElements
  }

  property get ConflictsSystemTable() : List<String> {
    return messagesFor(SYSTEM_TABLE)
  }

  property get ConflictsBureauCode() : List<String> {
    return messagesFor(BUREAU_CODE)
  }

  property get ConflictsForm() : List<String> {
    return messagesFor(POLICY_FORM)
  }

  property get ConflictsModifierMinMaxLookup() : List<String> {
    return messagesFor(MODIFIER_MIN_MAX_LOOKUP)
  }

  property get ConflictsProductModel() : List<ReportContent> {
    return _conflicts.Keys
        .flatMap(\sourceType -> reportContentsFor(sourceType))
        .where(\conflictContent -> conflictContent.IsProductModel)
  }

  property get FilesWithConflicts() : List<ConfigurationFile> {
    var conflictLists = _conflicts.Values.toList()
    conflictLists.add(_warningsEntity)
    return conflictLists
        .flatMap(\conflicts -> conflicts*.ConfigurationFile.toList())
        .toSet()
        .orderBy(\conflict -> conflict.Path)
  }

  private function messagesToStrings(messages : List<ReportContent>) : List<String> {
    return messages.map(\message -> message.asString())
  }

  private function messagesFor(sourceType : MessageReporter.ReportMessageSourceType) : List<String> {
    return messagesToStrings(reportContentsFor(sourceType))
  }

  private function lastMessageFor(sourceType : MessageReporter.ReportMessageSourceType) : String {
    return messagesFor(sourceType).last()?:""
  }

  private function reportContentsFor(sourceType : MessageReporter.ReportMessageSourceType) : List<ReportContent> {
    return _conflicts.getOrDefault(sourceType, {}).map(\conflict -> conflict.ReportContent)
  }

  function clearContent() {
    _conflicts = {}
    _warningsEntity = {}
  }

  private function reportConflict(reportContent : ReportContent, configurationFile : ConfigurationFile = null)
      : Conflict {
    var conflictsOfTargetType = _conflicts.getOrDefault(reportContent.SourceType, {})
    var newConflict = new Conflict(reportContent, configurationFile)
    conflictsOfTargetType.add(newConflict)
    _conflicts.put(reportContent.SourceType, conflictsOfTargetType)
    return newConflict
  }
}