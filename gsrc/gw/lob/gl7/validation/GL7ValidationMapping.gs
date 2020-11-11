package gw.lob.gl7.validation

uses gw.lang.reflect.IType

uses java.util.Map

class GL7ValidationMapping {
  static final var _wizardIdStepMap: Map<IType, String> = {
      // TODO: replace with real coverables and screen names
      GL7Exposure -> "GL LOB team will replace this with real mapping"
  }
  static function getWizardStepId(coverable: Coverable): String {
    return _wizardIdStepMap.get(coverable)
  }
}