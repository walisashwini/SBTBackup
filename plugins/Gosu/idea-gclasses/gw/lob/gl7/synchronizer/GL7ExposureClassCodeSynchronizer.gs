package gw.lob.gl7.synchronizer

uses gw.lob.common.dependency.PropertyInstanceInfo
uses gw.lob.common.synchronizer.ISynchronizer
uses gw.lob.common.LobPropertyService
uses java.util.Map
uses gw.lang.reflect.features.PropertyReference

class GL7ExposureClassCodeSynchronizer implements ISynchronizer<GL7GeneralLiabilityLine> {
  
  internal static var _mapping : Map<String, String> = {
      "ClassCodeForClassDescription" -> "ClassCode",
      "ClassDescriptionForClassCodes" -> "ClassDescription",
      "EDLClassCodeForClassDescription" -> "EDLClassCode",
      "EDLClassDescriptionForClassCode" -> "EDLClassDescription",
      "LiquorClassCodeForClassDescription" -> "LiquorClassCode",
      "LiquorClassDescriptionForClassCode" -> "LiquorClassDescription",
      "OwnersContractorsClassCodeForClassDescription" -> "OwnersContractorsClassCode",
      "OwnersContractorsClassDescriptionForClassCode" -> "OwnersContractorsClassDescription",
      "PollutionClassCodeForClassDescription" -> "PollutionClassCode",
      "PollutionClassDescriptionForClassCode" -> "PollutionClassDescription",
      "RailroadClassCodeForClassDescription" -> "RailroadClassCode",
      "RailroadClassDescriptionForClassCode" -> "RailroadClassDescription",
      "USTClassCodeForClassDescription" -> "USTClassCode",
      "USTClassDescriptionForClassCode" -> "USTClassDescription",
      "SpecialProtectiveHighwayClassCodeForClassDescription" -> "SpecialProtectiveHighwayClassCode",
      "SpecialProtectiveHighwayClassDescriptionForClassCode" -> "SpecialProtectiveHighwayClassDescription"
  }

  override function synchronizeBeforeChange(propInst: PropertyInstanceInfo) {
    synchronizeFields(propInst)
  }

  override function synchronizeAfterChange(propInst: PropertyInstanceInfo) {
  }

  override function synchronizeBeforeQuote(propInst: PropertyInstanceInfo, pLine: GL7GeneralLiabilityLine) {
  }

  private function synchronizeFields(propInst : PropertyInstanceInfo) {
    var targetPropName = _mapping.get(propInst.TypeInfo.Name)
    var exposure = propInst.ContextObject as GL7Exposure
    if(exposure.fieldExists(targetPropName)) {
      var propRef = getMappedPropertyReference(targetPropName)
      if (propRef != null) {
        propRef.set(propInst.ContextObject as GL7Exposure, propInst.Value as String)
        var targetPropInst = new PropertyInstanceInfo(propRef, propInst.ContextObject)
        LobPropertyService.Instance.updateEntityDependentProperties(targetPropInst)
      }
    }
  }

  internal static function getMappedPropertyReference(targetPropName : String) : PropertyReference<GL7Exposure, String> {
    var targetPropRef = new PropertyReference<GL7Exposure, String>(GL7Exposure, targetPropName)
    return targetPropRef
  }

}