package gw.forms

uses com.guidewire.commons.config.APIConfigFileAccess
uses gw.lob.common.ConfigResource
uses gw.lob.common.dependency.schema.form_inference_config.FormInferenceConfig
uses gw.lob.common.dependency.schema.form_inference_config.anonymous.elements.FormInferenceType_Version
uses org.apache.commons.lang3.StringUtils
uses org.slf4j.LoggerFactory

class FormInferenceConfigurationImpl extends ConfigResource implements FormInferenceConfiguration {

  private static final var LOG = LoggerFactory.getLogger(FormInferenceConfigurationImpl.Type)
  private static final var FORM_INFERENCE_CONFIG = "-form-inference-config.xml"

  /**
   * A map in the following data structure:
   *
   * {LobCode -> { FormCode -> { Jurisdiction -> List of Version}}}
   */
  private var _lobFormCodeToInferenceClassMap : Map<String, Map<String, Map<String, List<FormInferenceType_Version>>>>

  construct(configPath : String= "") {
    super (configPath)
    initConfig ()
  }

  private function initConfig() {
    _lobFormCodeToInferenceClassMap = new HashMap<String, Map<String, Map<String, List<FormInferenceType_Version>>>>()

    if (ConfigDir == null) {
      return
    }

    var formInferenceConfigFiles = ConfigDir.listFiles().where(\file -> file.Name.endsWith(FORM_INFERENCE_CONFIG))
    formInferenceConfigFiles.each(\file -> {
      var formInferenceConfig = FormInferenceConfig.parse(file)
      var formCodeVersionMap : Map<String, Map<String, List<FormInferenceType_Version>>> = new HashMap<String, Map<String, List<FormInferenceType_Version>>>()

      formInferenceConfig.getFormInference().forEach(
          \formInference -> {
            var versions : Map<String, List<FormInferenceType_Version>> = new HashMap<String, List<FormInferenceType_Version>>()
            formInference.getVersion().forEach(
                \version -> {
                  if (versions.containsKey(version.getJurisdiction())) {
                    versions.get(version.getJurisdiction()).add(version)
                  } else {
                    versions.put(version.getJurisdiction(), {version})
                  }
                }
            )
            formCodeVersionMap.put(formInference.getFormCode(), versions)
          }
      )
      _lobFormCodeToInferenceClassMap.put(StringUtils.substringBefore(file.getName(), FORM_INFERENCE_CONFIG), formCodeVersionMap)
    })
  }

  override function getFormInferenceVersion(lobCode: String, formCode: String, jurisdiction: String, effectiveDate: Date): FormInferenceType_Version {
    var formInferenceConfig = _lobFormCodeToInferenceClassMap.get(lobCode)

    if (formInferenceConfig == null) {
      return null
    }

    var formCodeMap = formInferenceConfig.get(formCode)

    if (formCodeMap == null) {
      return null
    }

    var cwVersions = formCodeMap.get(COUNTRY_WIDE)
    var jurisdictionVersions = formCodeMap.get(jurisdiction)
    var formInferenceVersion: FormInferenceType_Version

    if (jurisdictionVersions != null) {
      formInferenceVersion = getFormInferenceVersion(jurisdictionVersions, effectiveDate)
    }

    // fallback to CW
    if (formInferenceVersion == null && cwVersions != null) {
      formInferenceVersion = getFormInferenceVersion(cwVersions, effectiveDate)
    }

    return formInferenceVersion
  }

  function reload (configPath : String) {
    super.initialize(configPath)

    initConfig()
  }

  private function getFormInferenceVersion(versions: List<FormInferenceType_Version>, effectiveDate: Date): FormInferenceType_Version {
    return versions.stream()
        .filter(\version -> effectiveDate.isBetweenDates(version.EffectiveDate.Date, version.ExpiryDate?.Date))
        .findFirst()
        .orElse(null)
  }
}