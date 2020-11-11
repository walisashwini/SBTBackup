package gw.forms

uses gw.util.concurrent.LockingLazyVar

class FormInferenceSupport {
  // create singleton
  static var _instance = LockingLazyVar.make( \ -> new FormInferenceSupport())

  var _formInferenceConfig : FormInferenceConfiguration

  construct() {
    _formInferenceConfig = new FormInferenceConfigurationImpl()
  }

  construct(configPath: String) {
    _formInferenceConfig = new FormInferenceConfigurationImpl(configPath)
  }

  // get singleton
  static property get Instance(): FormInferenceSupport {
    return _instance.get()
  }

  function getFormInferenceClass(lobCode: String, formNumber: String, jurisdiction: String, effectiveDate: Date) : String {
    var version = _formInferenceConfig.getFormInferenceVersion(lobCode, formNumber, jurisdiction, effectiveDate)

    if (version != null && version.Available == false) {
      version = null
    }

    return version?.getInferenceClass()
  }

  // reload _formInferenceConfig (a singleton) with another path
  function reloadConfig(configPath: String) {
    _formInferenceConfig.reload(configPath)
  }
}