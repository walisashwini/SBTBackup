package gw.lob.gl7.validation

uses gw.lob.common.validation.GeneratedValidation

abstract class GL7GeneratedValidation<T extends Coverable> extends GeneratedValidation<T> {
  override protected function getWizardStepId(coverable: T): String {
    return GL7ValidationMapping.getWizardStepId(coverable)
  }
}