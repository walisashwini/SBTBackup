package gw.sbt.artifacts.versioned

uses gw.xml.XmlElement

enum ContainerPropertyConfigType {

  LOB_FIELD_META("lob-field-meta.xml", "LobFieldMeta", {
      "Jurisdiction", "Label", "WidgetType", "EffectiveDate", "ExpiryDate", "Priority", "Editable", "Available",
      "Visible", "Required", "DefaultValue", "DefaultPath","Max", "Min","ForceRefresh"
  }),
  AVAILABILITY_CONFIG("availability-config.xml", "AvailabilityConfig", {
      "Jurisdiction", "EffectiveDate", "ExpiryDate", "Depends", "Available"
  }),
  EXISTENCE_CONFIG("existence-config.xml", "ExistenceConfig", {
      "Jurisdiction", "EffectiveDate", "ExpiryDate", "Depends", "Available", "Existence"
  }),
  VALIDATION_CONFIG("validation-config.xml", "ValidationConfig", {
      "Jurisdiction", "EffectiveDate", "ExpiryDate", "Available", "Validator", "RangeValidator"
  }),
  PRODUCTMODEL_EXTENSION("productmodel-extension.xml", "ClauseTermMeta", {
      "Jurisdiction", "EffectiveDate", "ExpiryDate", "Priority", "Visible", "Editable", "DefaultValue", "Max", "Min", "Available"
  }, "codeIdentifier", "type", "codeIdentifier"),
  SYNC_PROPERTY_META("sync-property-meta.xml", "SyncPropertyMeta", {
      "Jurisdiction", "EffectiveDate", "ExpiryDate", "SynchronizerClass", "Available"
  }, "containerPath", "containerType", "propertyName"),
  STAT_CODE_CONFIG("stat-code-config.xml", "StatCodeConfig", {
      "Jurisdiction", "EffectiveDate", "ExpiryDate", "TargetEntity", "Available"
  }, "name", "type", "dtoProperty"),
  VALUE_DEPENDENCY_CONFIG("value-dependency-config.xml", "ValueDependencyConfig", {
      "EffectiveDate", "ExpiryDate", "Jurisdiction", "KeyColumn", "ValueColumn", "Available"
  }),
  SCHEDULE_CONFIG("schedule-config.xml", "ScheduleConfig", {
      "ColumnName", "ColumnLabel", "Required", "Priority", "Type", "ScheduledItemType", "Default",
      "IsKey", "Minimum", "Maximum","MethodExpression","TypeList","TypeFilter",
      "ValueRangeGetter","OptionGroupLabelMethodExpression","OptionLabelMethodExpression",
      "Jurisdiction", "EffectiveDate", "ExpirationDate", "Available"
  }),
  FORM_INFERENCE_CONFIG("form-inference-config.xml", "FormInferenceConfig", {
      "Jurisdiction", "EffectiveDate", "ExpiryDate", "InferenceClass", "Available"
  } , "formCode"),
  MODEL_MAPPING_CONFIG("model-mapping-config.xml", "ModelMappingConfig", {
      "EffectiveDate", "Path", "Jurisdiction", "ExpiryDate", "Available"
  }),
  SUSPENSION_CONFIG("suspension-config.xml", "SuspensionConfig", {
      "Jurisdiction", "EffectiveDate", "PropertyName", "NoCoverageValue", "ExpiryDate", "Available"
  }, "patternCode"),



  var _xmlFile : String as readonly ConfigFile
  var _rootQName: String as RootQName
  var _containerIdAttribute : String as readonly ContainerIdAttribute
  var _containerTypeAttribute : String as readonly ContainerTypeAttribute
  var _propertyIdAttribute : String as readonly PropertyIdAttribute
  var _versionElements : List<String> as readonly VersionElements

  //note: the element in version is defined in corresponding XSD.
  private construct(xmlFile : String, rootQName: String, versionElements : List<String>, containerIdAttribute : String = null, containerTypeAttribute : String = null, propertyIdAttribute : String = null) {
    _xmlFile = xmlFile
    _rootQName = rootQName
    _versionElements = versionElements
    _containerIdAttribute = containerIdAttribute
    _containerTypeAttribute = containerTypeAttribute
    _propertyIdAttribute = propertyIdAttribute
  }

  //get the type from the root qname of the element
  static function getConfigType(element : XmlElement) : ContainerPropertyConfigType {
    var rootQName = element.$QName.LocalPart
    if (rootQName == LOB_FIELD_META.RootQName) {
      return LOB_FIELD_META
    } else if (rootQName == (AVAILABILITY_CONFIG.RootQName)) {
      return AVAILABILITY_CONFIG
    } else if (rootQName == (EXISTENCE_CONFIG.RootQName)) {
      return EXISTENCE_CONFIG
    } else if (rootQName == (FORM_INFERENCE_CONFIG.RootQName)) {
      return FORM_INFERENCE_CONFIG
    } else if (rootQName == (VALIDATION_CONFIG.RootQName)) {
      return VALIDATION_CONFIG
    } else if (rootQName == (PRODUCTMODEL_EXTENSION.RootQName)) {
      return PRODUCTMODEL_EXTENSION
    } else if (rootQName == (SYNC_PROPERTY_META.RootQName)) {
      return SYNC_PROPERTY_META
    } else if (rootQName == (STAT_CODE_CONFIG.RootQName)) {
      return STAT_CODE_CONFIG
    } else if (rootQName == (VALUE_DEPENDENCY_CONFIG.RootQName)) {
      return VALUE_DEPENDENCY_CONFIG
    } else if (rootQName == (SCHEDULE_CONFIG.RootQName)) {
      return SCHEDULE_CONFIG
    } else if (rootQName == (MODEL_MAPPING_CONFIG.RootQName)) {
      return MODEL_MAPPING_CONFIG
    } else if (rootQName == (SUSPENSION_CONFIG.RootQName)) {
      return SUSPENSION_CONFIG
    } else {
      //only exists in some test cases.
      return null
    }
  }

}