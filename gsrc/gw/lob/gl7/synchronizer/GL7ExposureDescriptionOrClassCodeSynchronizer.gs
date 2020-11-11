package gw.lob.gl7.synchronizer

uses gw.lob.common.synchronizer.ISynchronizer
uses gw.lob.common.dependency.PropertyInstanceInfo
uses gw.lob.common.LobPropertyService

class GL7ExposureDescriptionOrClassCodeSynchronizer implements ISynchronizer<GL7GeneralLiabilityLine> {
  override function synchronizeBeforeChange(propInst: PropertyInstanceInfo) {
    GL7ExposureClassCodeSynchronizer._mapping.eachValue( \ targetPropName -> {
      var exposure = propInst.ContextObject as GL7Exposure
      if(exposure.fieldExists(targetPropName)) {
        var targetPropRef = GL7ExposureClassCodeSynchronizer.getMappedPropertyReference(targetPropName)
        if (targetPropRef != null) {
          targetPropRef.set(propInst.ContextObject as GL7Exposure, null)
          var targetPropInst = new PropertyInstanceInfo(targetPropRef, propInst.ContextObject)
          synchronizeFields(propInst)
        }
      }
    })
  }

  override function synchronizeAfterChange(propInst: PropertyInstanceInfo) {
  }

  override function synchronizeBeforeQuote(propInst: PropertyInstanceInfo, pLine: GL7GeneralLiabilityLine) {
  }

  private function synchronizeFields(propInst : PropertyInstanceInfo) {
    LobPropertyService.Instance.updateEntityDependentProperties(propInst)
  }

}