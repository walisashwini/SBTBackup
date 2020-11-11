package gw.sbt.loader.reporter

uses gw.sbt.artifacts.ArtifactType
uses gw.sbt.artifacts.versioned.ContainerPropertyConfigType
uses gw.sbt.model.UpdateDecision

class MessageReporter {

  enum ReportMessageSourceType {
    //product and data model:
    CLAUSE,
    ATTRIBUTE,
    SCRIPT,
    COVTERM,
    COVTERM_LIMITS,
    COVTERM_DEFAULT,
    OPTION,
    COVTERMPACK,
    ENTITY,
    PACKAGETERM,
    TYPELIST,
    PRODUCT_PATTERN,
    POLICY_FORM,
    BUREAU_CODE,
    SYSTEM_TABLE,

    // configuration files:
    SCHEDULE_CONFIG,
    AVAILABILITY_CONFIG,
    EXISTENCE_CONFIG,
    VALIDATION_CONFIG,
    LOB_FIELD_META,
    PRODUCTMODEL_EXTENSION,
    SYNC_PROPERTY_META,
    STAT_CODE_CONFIG,
    VALUE_DEPENDENCY_CONFIG,
    FORM_INFERENCE_CONFIG,
    MODEL_MAPPING_CONFIG,
    SUSPENSION_CONFIG,
    MISSING_DIFF_TREE,
    LOOKUP_TABLES,
    LOOKUP_TABLES_CONFLICT,

    // others:
    XSD,
    PLUGIN,
    GOSU,
    PCF,
    DISPLAY_PROPERTY,
    PM_DISPLAY_PROPERTY,
    MODIFIER,
    RATE_FACTOR,
    POLICY_LINE_PATTERN,
    MISSING_CURRENT_POLICY_LINE_PATTERN,
    MODIFIER_MIN_MAX_LOOKUP
  }

  var _conflictReporter : ConflictReporter as ConflictReporter = new ConflictReporter()
  var _modificationReporter : ModificationReporter as ModificationReporter = new ModificationReporter()
  var _auditReporter : AuditReporter as AuditReporter = new AuditReporter()
  var _deviationsReporter : DeviationsReporter as DeviationsRepoter = new DeviationsReporter()

  function reportAdded(reportContent : String, type : ReportMessageSourceType) {
    switch (type) {
      case XSD:
        _modificationReporter.reportAddedXSD(reportContent)
        break
      case PCF:
        _modificationReporter.reportAddedPCF(reportContent)
        break
      case GOSU:
        _modificationReporter.reportAddedGosu(reportContent)
        break
      case TYPELIST:
        _modificationReporter.reportAddedTypeList(reportContent)
        break
      case MODIFIER_MIN_MAX_LOOKUP:
        _modificationReporter.reportAddedModifierMinMaxLookups(reportContent)
        break
      case LOOKUP_TABLES:
        _modificationReporter.reportAddedLookupTable(reportContent)
        break
      default:
        throw new IllegalArgumentException("Invalid messaging source type: ${type}")
    }
  }

  function reportAdded(reportContent : List<String>, type : ReportMessageSourceType) {
    switch (type) {
      case ATTRIBUTE:
      case SCRIPT:
      case COVTERM:
      case COVTERM_DEFAULT:
      case COVTERM_LIMITS:
      case OPTION:
      case PACKAGETERM:
      case COVTERMPACK:
        _modificationReporter.reportAddedProductModel(reportContent, type)
        break
      default:
        throw new IllegalArgumentException("Invalid messaging source type: ${type}")
    }
  }

  function reportRemoved(reportContent : List<String>, type : ReportMessageSourceType) {
    switch (type) {
      case ATTRIBUTE:
      case SCRIPT:
      case COVTERM:
      case COVTERM_DEFAULT:
      case COVTERM_LIMITS:
      case OPTION:
      case PACKAGETERM:
      case COVTERMPACK:
        _modificationReporter.reportRemovedProductModel(reportContent, type)
        break
      default:
        throw new IllegalArgumentException("Invalid messaging source type: ${type}")
    }
  }

  function reportRemoved(reportContent : String, type : ReportMessageSourceType) {
    switch (type) {
      case MODIFIER_MIN_MAX_LOOKUP:
        _modificationReporter.reportRemovedModifierMinMaxLookups(reportContent)
        break
      case GOSU:
        _modificationReporter.reportRemovedGosu(reportContent)
        break
      default:
        throw new IllegalArgumentException("Invalid messaging source type: ${type}")
    }
  }

  function reportGosuCustomizationDetectedManualMerge(reportContent : String, type : ReportMessageSourceType) {
    switch (type) {
      case GOSU:
        _modificationReporter.reportCustomizationDetectedManualMergeGosu(reportContent)
        break
      default:
        throw new IllegalArgumentException("Invalid messaging source type: ${type}")
    }
  }

  function reportGosuCustomizationDetectedAutomaticMerge(reportContent : String, type : ReportMessageSourceType) {
    switch (type) {
      case GOSU:
        _modificationReporter.reportCustomizationDetectedAutoMergeGosu(reportContent)
        break
      default:
        throw new IllegalArgumentException("Invalid messaging source type: ${type}")
    }
  }

  function reportForAuditSystemTable(name : String, titles : List<String>, content : List<String>, tableDecision : UpdateDecision, decision : UpdateDecision, sourceType : MessageReporter.ReportMessageSourceType) {
    _auditReporter.reportSystemTable(name, titles, content, tableDecision, decision, sourceType)
  }

  function reportForDeviations(tableName : String, fileName : String, titles : List<String>, content : List<String>, filingInstructions : String, tableDecision : UpdateDecision, decision : UpdateDecision, sourceType : MessageReporter.ReportMessageSourceType) {
    switch (sourceType) {
      case BUREAU_CODE:
        _deviationsReporter.reportBureauCodes(tableName, fileName, titles, content, tableDecision, decision, filingInstructions)
        break
      default:
        throw new IllegalArgumentException("Invalid messaging source type: ${sourceType}")
    }
  }

  function reportForAudit(reportContent : List<String>, type : ReportMessageSourceType, message : String = null, reportTitle : List<String> = {}) {
    switch (type) {
      case CLAUSE:
      case COVTERM:
      case OPTION:
        _auditReporter.reportProductModel(reportContent, type, message)
        break
      case SCHEDULE_CONFIG:
      case AVAILABILITY_CONFIG:
      case EXISTENCE_CONFIG:
      case FORM_INFERENCE_CONFIG:
      case VALIDATION_CONFIG:
      case LOB_FIELD_META:
      case PRODUCTMODEL_EXTENSION:
      case SYNC_PROPERTY_META:
      case STAT_CODE_CONFIG:
      case VALUE_DEPENDENCY_CONFIG:
      case MODEL_MAPPING_CONFIG:
      case SUSPENSION_CONFIG:
        _auditReporter.reportConfigurationFiles(reportContent, type)
        break
      case POLICY_FORM:
        _auditReporter.reportFormPatterns(reportContent, POLICY_FORM)
        break
      case MODIFIER:
        _auditReporter.reportModifier(reportContent, MODIFIER)
        break
      case RATE_FACTOR:
        _auditReporter.reportRateFactor(reportContent, RATE_FACTOR)
        break
      case POLICY_LINE_PATTERN:
        _auditReporter.reportPolicyLinePattern(reportContent, POLICY_LINE_PATTERN)
        break
      default:
        throw new IllegalArgumentException("Invalid messaging source type: ${type}")
    }
  }

  static function getReportSourceType(configType : ContainerPropertyConfigType) : ReportMessageSourceType {
    switch (configType) {
      case AVAILABILITY_CONFIG:
        return ReportMessageSourceType.AVAILABILITY_CONFIG
      case EXISTENCE_CONFIG:
        return ReportMessageSourceType.EXISTENCE_CONFIG
      case FORM_INFERENCE_CONFIG:
        return ReportMessageSourceType.FORM_INFERENCE_CONFIG
      case VALIDATION_CONFIG:
        return ReportMessageSourceType.VALIDATION_CONFIG
      case LOB_FIELD_META:
        return ReportMessageSourceType.LOB_FIELD_META
      case PRODUCTMODEL_EXTENSION:
        return ReportMessageSourceType.PRODUCTMODEL_EXTENSION
      case SYNC_PROPERTY_META:
        return ReportMessageSourceType.SYNC_PROPERTY_META
      case STAT_CODE_CONFIG:
        return ReportMessageSourceType.STAT_CODE_CONFIG
      case MODEL_MAPPING_CONFIG:
        return ReportMessageSourceType.MODEL_MAPPING_CONFIG
      case SUSPENSION_CONFIG:
        return ReportMessageSourceType.SUSPENSION_CONFIG
      default:
        throw new IllegalArgumentException("Invalid ContainerPropertyConfigType: ${configType}}")
    }
  }

  static function getReportSourceType(artifactType : ArtifactType) : ReportMessageSourceType {
    switch (artifactType) {
      case CLAUSE:
        return ReportMessageSourceType.CLAUSE
      case COV_TERM:
        return ReportMessageSourceType.COVTERM
      case COV_TERM_OPTION:
        return ReportMessageSourceType.OPTION
      case POLICY_FORM:
        return ReportMessageSourceType.POLICY_FORM
      case MODIFIER:
        return ReportMessageSourceType.MODIFIER
      case RATE_FACTOR:
        return ReportMessageSourceType.RATE_FACTOR
      default:
        throw new IllegalArgumentException("Invalid ArtifactType: ${artifactType}}")
    }
  }
}