package gw.apd.policy

uses entity.APDDataField
uses gw.api.locale.DisplayKey

/**
 * Agile Product Developer
 */
@Export
enhancement APDDataFieldContentEnhancement : APDDataField {

  /**
   * Gets the AccountLocation from the PolicyLocation
   */
  property get AccountLocation() : AccountLocation {
    return this.Location.AccountLocation
  }

  /**
   * Sets the AccountLocation and ensures that GarageLocation is also set properly
   */
  property set AccountLocation(acctLoc : AccountLocation) {
    // See if there's already a PolicyLocation which points to the AccountLocation.
    // There should be at most one.
    var policyLocs = this.Branch.PolicyLocations.where(\ p -> p.AccountLocation == acctLoc)
    if (policyLocs.Count > 1) {
      throw "Expected only one PolicyLocation associated with the AccountLocation: " + acctLoc
    }
    var policyLoc = policyLocs.first()

    // Create a new PolicyLocation if neccessary
    if (policyLoc == null && acctLoc != null) {
      policyLoc = this.Branch.newLocation(acctLoc)
      for(var tc in policyLoc.TerritoryCodes)
        tc.fillWithFirst()
    }

    if (policyLoc != null) {
      this.Location = policyLoc
    }
  }

  property get MinMaxError() : String {
    switch (this.Attribute.Type) {
      case APDFieldType.TC_BIGDECIMAL :
      case APDFieldType.TC_MONEY :
        if (this.DecimalValue == null) return null
        var min = this.getRuleDecimalValue(APDRuleType.TC_MIN)
        if (min != null and this.DecimalValue < min) return DisplayKey.get("Web.Policy.ManualLine.MinimumAmountRuleError", this.DecimalValue, min)
        var max = this.getRuleDecimalValue(APDRuleType.TC_MAX)
        if (max != null and this.DecimalValue > max) return DisplayKey.get("Web.Policy.ManualLine.MaximumAmountRuleError", this.DecimalValue, max)
        break
      case APDFieldType.TC_DATE :
        if (this.DateValue == null) return null
        var min = this.getRuleDateValue(APDRuleType.TC_MIN)
        if (min != null and this.DateValue < min) return DisplayKey.get("Web.Policy.ManualLine.MinimumAmountRuleError", this.DateValue, min)
        var max = this.getRuleDateValue(APDRuleType.TC_MAX)
        if (max != null and this.DateValue > max) return DisplayKey.get("Web.Policy.ManualLine.MaximumAmountRuleError", this.DateValue, max)
        break
      case APDFieldType.TC_INTEGER :
        if (this.IntegerValue == null) return null
        var min = this.getRuleIntegerValue(APDRuleType.TC_MIN)
        if (min != null and this.IntegerValue < min) return DisplayKey.get("Web.Policy.ManualLine.MinimumAmountRuleError", this.IntegerValue, min)
        var max = this.getRuleIntegerValue(APDRuleType.TC_MAX)
        if (max != null and this.IntegerValue > max) return DisplayKey.get("Web.Policy.ManualLine.MaximumAmountRuleError", this.IntegerValue, max)
        break
    }
    return null
  }

  /**
   * Returns true if this data field should be visible in the UI, and false if it should be hidden.
   */
  property get VisibleInUI() : boolean {
    return (this.Availability == APDDataExistenceType.TC_CAPTURED) or (this.Availability == APDDataExistenceType.TC_DERIVED)
  }
}
