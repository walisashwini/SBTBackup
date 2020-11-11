package gw.lob.gl7.pcf

uses gw.lob.gl7.validation.GL7LineValidation
uses gw.lob.gl7.validation.GL7LocationValidation
uses gw.validation.PCValidationContext

class GL7ValidationUtil {

  static function beforeSaveExposures(policyPeriod : PolicyPeriod) {
    var line = policyPeriod.GL7Line
    var locations = line.GL7SublineTypes*.Locations
    PCValidationContext.doPageLevelValidation(\ context -> {
      new GL7LineValidation(context, line).checkSublineCombinations()
      locations.each(\ location -> new GL7LocationValidation(context, location).validate())
    })
  }

  static function beforeSaveSublines (policyPeriod : PolicyPeriod) {
    var line = policyPeriod.GL7Line
    PCValidationContext.doPageLevelValidation(\ context -> {
      new GL7LineValidation(context, line).validateSublineUI()
    })
  }

  static function beforeSaveLocation (policyLocation : PolicyLocation) {
    PCValidationContext.doPageLevelValidation(\ context -> {
      new GL7LocationValidation(context, null).stateAvailableForPolicyPeriod(policyLocation)
    })
  }
}