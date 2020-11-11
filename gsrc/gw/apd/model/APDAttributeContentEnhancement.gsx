package gw.apd.model

uses entity.APDAttribute

/**
 * Agile Product Developer
 */
@Export
enhancement APDAttributeContentEnhancement : APDAttribute {

  function getUIRuleMode(rType : APDRuleType) : String {
    var rule = this.Rules.firstWhere(\r -> r.RuleType == rType) as APDAttributeRule
    if (rule == null or rule.HasNoDefault) return "none"
    return this.Type.Code
  }

  /**
   * Returns the correct mode for displaying values of this attribute in the UI. This is based on the type of the
   * attribute and whether it is scalable.
   */
  property get CellMode() : String {
    var prefix = (this.Scalable) ? ScalableCellModePrefix : ""
    return prefix + this.Type.Code
  }

  /**
   * Returns a prefix to use in UI cell mode names for scalable values.
   */
  static property get ScalableCellModePrefix() : String {
    return "scalable"
  }
}