package gw.apd.web

uses gw.apd.APDPopupParentHelper
uses gw.api.locale.DisplayKey

@Export
class APDRulePopupHelper {

  static function getRuleDisplayDescription(rule: APDRule) : String {
    if (rule.RuleType == null) {
      return ""
    }

    var ruleDisplayValue = getRuleDisplayValue(rule)

    var fieldIdentifier = getParentReferenceString(rule)

    switch (rule.RuleType) {
      case APDRuleType.TC_DEFAULT:
        return DisplayKey.get("Web.APDRule.Default", fieldIdentifier, ruleDisplayValue)
      case APDRuleType.TC_EXISTENCE:
        switch (rule.DefaultExistence) {
          case APDDataExistenceType.TC_AVAILABLE:
            return DisplayKey.get("Web.APDRule.Available",fieldIdentifier,ruleDisplayValue)
          case APDDataExistenceType.TC_UNAVAILABLE:
            return DisplayKey.get("Web.APDRule.Unavailable",fieldIdentifier,ruleDisplayValue)
          case APDDataExistenceType.TC_CAPTURED:
            return DisplayKey.get("Web.APDRule.Captured",fieldIdentifier,ruleDisplayValue)
          case APDDataExistenceType.TC_DERIVED:
            return DisplayKey.get("Web.APDRule.Derived", fieldIdentifier, ruleDisplayValue)
          case APDDataExistenceType.TC_HIDDEN:
            return DisplayKey.get("Web.APDRule.Hidden", fieldIdentifier, ruleDisplayValue)
          case APDDataExistenceType.TC_OPTIONAL:
            return DisplayKey.get("Web.APDRule.Optional",fieldIdentifier,ruleDisplayValue)
          case APDDataExistenceType.TC_REQUIRED:
            return DisplayKey.get("Web.APDRule.Required",fieldIdentifier,ruleDisplayValue)
          case APDDataExistenceType.TC_SUGGESTED:
            return DisplayKey.get("Web.APDRule.Suggested",fieldIdentifier,ruleDisplayValue)
          case APDDataExistenceType.TC_CAPTUREDBIND:
            return DisplayKey.get("Web.APDRule.CapturedBind",fieldIdentifier,ruleDisplayValue)
          case APDDataExistenceType.TC_CAPTUREDISSUE:
            return DisplayKey.get("Web.APDRule.CapturedIssue",fieldIdentifier,ruleDisplayValue)
          case APDDataExistenceType.TC_CAPTUREDQUOTE:
            return DisplayKey.get("Web.APDRule.CapturedQuote",fieldIdentifier,ruleDisplayValue)
          default:
            throw new IllegalArgumentException("Unable to determine display value for rule. Unknown APDDataExistenceType: "+rule.DefaultExistence)
        }
      case APDRuleType.TC_MAX:
        return DisplayKey.get("Web.APDRule.Maximum",fieldIdentifier,ruleDisplayValue)
      case APDRuleType.TC_MIN:
        return DisplayKey.get("Web.APDRule.Minimum",fieldIdentifier,ruleDisplayValue)
      case APDRuleType.TC_TAG:
        if (rule.DefaultTagValue == APDTagApplicability.TC_APPLIES) {
          return DisplayKey.get("Web.APDRule.Tag.Applies", fieldIdentifier, rule.TagType.DisplayName)
        } else {
          return DisplayKey.get("Web.APDRule.Tag.DoesNotApply", fieldIdentifier, rule.TagType.DisplayName)
        }
      default:
        throw new IllegalArgumentException("Unable to determine display value for rule. Unknown APDRuleType: "+rule.RuleType)
    }
  }

  private static function getRuleDisplayValue(rule : APDRule) : String {
    var displayValue = getRuleDisplayValueInternal(rule)
    return displayValue?:"empty"
  }

  private static function getRuleDisplayValueInternal(rule : APDRule) : String {
    switch (rule.RuleType) {
      case APDRuleType.TC_EXISTENCE:
        return rule.DefaultExistence.DisplayName
      case APDRuleType.TC_TAG:
        return rule.DefaultTagValue?.toString()
      default:
        if (rule typeis APDAttributeRule) {
          var fieldType = (rule as APDAttributeRule).Attribute.Type
          switch (fieldType) {
            case APDFieldType.TC_MONEY:
            case APDFieldType.TC_BIGDECIMAL:
              return rule.DefaultDecimalValue.DisplayValue
            case APDFieldType.TC_INTEGER:
              return rule.DefaultIntegerValue?.toString()
            case APDFieldType.TC_BOOLEAN:
              return rule.DefaultBitValue?.toString()
            case APDFieldType.TC_TYPEKEY:
              return rule.DefaultCodeValue.DisplayName
            case APDFieldType.TC_DATE:
              return rule.DefaultDateValue?.ShortFormat
            case APDFieldType.TC_VARCHAR:
              return rule.DefaultStringValue
            case APDFieldType.TC_LOCATION:
            case APDFieldType.TC_PARTY:
            case null:
              //default for location/party not currently supported
              return null
            default:
              throw new IllegalArgumentException("Unable to determine display value for rule. Unknown APDFieldType: "+fieldType)
          }
        } else {
          throw new IllegalArgumentException("Unable to determine display value for rule with ruletype "+rule.RuleType+" with underlying type "+(typeof rule).Name)
        }
    }
  }

  public static function getParentReferenceString(rule : APDRule) : String {
    var parentType : String
    var parentName : String
    switch (rule.Subtype) {
      case typekey.APDRule.TC_APDATTRIBUTERULE:
        return APDPopupParentHelper.getParentReference((rule as APDAttributeRule).Attribute)
      case typekey.APDRule.TC_APDCLAUSERULE:
        return APDPopupParentHelper.getParentReference((rule as APDClauseRule).Clause)
      case typekey.APDRule.TC_APDDROPDOWNENTRYRULE:
        return APDPopupParentHelper.getParentReference((rule as APDDropdownEntryRule).DropdownEntry)
    }

    return parentName.HasContent?DisplayKey.get("Web.APDRule.Owner.ParentReference",parentType,parentName):parentType
  }

  static function getRuleElementDisplayDescription(ruleElement : APDRuleElement) : String {
    if (ruleElement.Rule.RuleType == null) {
      return null
    }

    var elementDisplayValue = getRuleElementDisplayValue(ruleElement)

    var fieldIdentifier = getParentReferenceString(ruleElement.Rule)

    switch (ruleElement.Rule.RuleType) {
      case APDRuleType.TC_DEFAULT:
        return DisplayKey.get("Web.APDRule.Variant.Default", fieldIdentifier, elementDisplayValue)
      case APDRuleType.TC_EXISTENCE:
        switch (ruleElement.Existence) {
          case APDDataExistenceType.TC_AVAILABLE:
            return DisplayKey.get("Web.APDRule.Variant.Available",fieldIdentifier,elementDisplayValue)
          case APDDataExistenceType.TC_UNAVAILABLE:
            return DisplayKey.get("Web.APDRule.Variant.Unavailable",fieldIdentifier,elementDisplayValue)
          case APDDataExistenceType.TC_CAPTURED:
            return DisplayKey.get("Web.APDRule.Variant.Captured",fieldIdentifier,elementDisplayValue)
          case APDDataExistenceType.TC_DERIVED:
            return DisplayKey.get("Web.APDRule.Variant.Derived",fieldIdentifier,elementDisplayValue)
          case APDDataExistenceType.TC_HIDDEN:
            return DisplayKey.get("Web.APDRule.Variant.Hidden",fieldIdentifier,elementDisplayValue)
          case APDDataExistenceType.TC_OPTIONAL:
            return DisplayKey.get("Web.APDRule.Variant.Optional",fieldIdentifier,elementDisplayValue)
          case APDDataExistenceType.TC_REQUIRED:
            return DisplayKey.get("Web.APDRule.Variant.Required",fieldIdentifier,elementDisplayValue)
          case APDDataExistenceType.TC_SUGGESTED:
            return DisplayKey.get("Web.APDRule.Variant.Suggested",fieldIdentifier,elementDisplayValue)
          case APDDataExistenceType.TC_CAPTUREDBIND:
            return DisplayKey.get("Web.APDRule.Variant.CapturedBind",fieldIdentifier,elementDisplayValue)
          case APDDataExistenceType.TC_CAPTUREDISSUE:
            return DisplayKey.get("Web.APDRule.Variant.CapturedIssue",fieldIdentifier,elementDisplayValue)
          case APDDataExistenceType.TC_CAPTUREDQUOTE:
            return DisplayKey.get("Web.APDRule.Variant.CapturedQuote",fieldIdentifier,elementDisplayValue)
          case null:
            return null
          default:
            throw new IllegalArgumentException("Unable to determine display value for rule. Unknown APDDataExistenceType: "+ruleElement.Existence)
        }
      case APDRuleType.TC_MAX:
        return DisplayKey.get("Web.APDRule.Variant.Maximum",fieldIdentifier,elementDisplayValue)
      case APDRuleType.TC_MIN:
        return DisplayKey.get("Web.APDRule.Variant.Minimum",fieldIdentifier,elementDisplayValue)
      case APDRuleType.TC_TAG:
        if (ruleElement.DefaultTagValue == APDTagApplicability.TC_APPLIES) {
          return DisplayKey.get("Web.APDRule.Variant.Tag.Applies", fieldIdentifier, ruleElement.Rule.TagType.DisplayName)
        } else {
          return DisplayKey.get("Web.APDRule.Variant.Tag.DoesNotApply", fieldIdentifier, ruleElement.Rule.TagType.DisplayName)
        }
      default:
        throw new IllegalArgumentException("Unable to determine display value for rule element. Unknown APDRuleType: "+ruleElement.Rule.RuleType)
    }
  }


  private static function getRuleElementDisplayValue(ruleElement : APDRuleElement) : String {
    var displayValue = getRuleElementDisplayValueInternal(ruleElement)
    return displayValue?:"empty"
  }

  private static function getRuleElementDisplayValueInternal(ruleElement : APDRuleElement) : String {
    switch (ruleElement.Rule.RuleType) {
      case APDRuleType.TC_EXISTENCE:
        return ruleElement.Existence.DisplayName
      case APDRuleType.TC_TAG:
        return ruleElement.DefaultTagValue?.toString()
      default:
        if (ruleElement.Rule typeis APDAttributeRule) {
          var fieldType = (ruleElement.Rule as APDAttributeRule).Attribute.Type
          switch (fieldType) {
            case APDFieldType.TC_MONEY:
            case APDFieldType.TC_BIGDECIMAL:
              return ruleElement.DefaultDecimalValue.DisplayValue
            case APDFieldType.TC_INTEGER:
              return ruleElement.DefaultIntegerValue?.toString()
            case APDFieldType.TC_BOOLEAN:
              return ruleElement.DefaultBitValue?.toString()
            case APDFieldType.TC_TYPEKEY:
              return ruleElement.DefaultCodeValue.DisplayName
            case APDFieldType.TC_DATE:
              return ruleElement.DefaultDateValue?.ShortFormat
            case APDFieldType.TC_VARCHAR:
              return ruleElement.DefaultStringValue
            case APDFieldType.TC_LOCATION:
            case APDFieldType.TC_PARTY:
              //default for location/party not currently supported
              return null
            default:
              throw new IllegalArgumentException("Unable to determine display value for rule. Unknown APDFieldType: "+fieldType)
          }
        } else {
          throw new IllegalArgumentException("Unable to determine display value for rule element with ruletype "+ruleElement.Rule.RuleType+" with underlying type "+(typeof ruleElement).Name)
        }
    }
  }

  public static function getRuleTypeString(rule : APDRule) : String {
    if (rule.RuleType == APDRuleType.TC_EXISTENCE) {
      switch (rule.Subtype) {
        case typekey.APDRule.TC_APDATTRIBUTERULE:
          return DisplayKey.get("Web.APDRule.Existence.Attribute")
        case typekey.APDRule.TC_APDCLAUSERULE:
          return DisplayKey.get("Web.APDRule.Existence.Clause")
        case typekey.APDRule.TC_APDDROPDOWNENTRYRULE:
          return DisplayKey.get("Web.APDRule.Existence.DropdownEntry")
        default:
          throw new IllegalStateException("Unknown rule subtype \"${rule.Subtype}\"")
      }
    } else {
      return rule.RuleType.toString()
    }
  }

  public static function getDefaultValueLabel(rule : APDRule) : String {
    switch (rule.RuleType) {
      case APDRuleType.TC_DEFAULT:
        return DisplayKey.get("Web.APDAttributeRule.Default")
      case APDRuleType.TC_MIN:
        return DisplayKey.get("Web.APDAttributeRule.Minimum")
      case APDRuleType.TC_MAX:
        return DisplayKey.get("Web.APDAttributeRule.Maximum")
      case APDRuleType.TC_EXISTENCE:
        switch (rule.Subtype) {
          case typekey.APDRule.TC_APDATTRIBUTERULE:
            return DisplayKey.get("Web.APDAttributeRule.Existence.Usage")
          case typekey.APDRule.TC_APDCLAUSERULE:
          case typekey.APDRule.TC_APDDROPDOWNENTRYRULE:
            return DisplayKey.get("Web.APDAttributeRule.Existence.Availability")
          default:
            throw new IllegalStateException("Unknown rule subtype \"${rule.Subtype}\"")
        }
      case APDRuleType.TC_TAG:
        return DisplayKey.get("Web.APDTagPopup.TagDefaultValue")
      default:
        throw new IllegalStateException("Unknown rule type \"${rule.RuleType}\"")
    }
  }

  public static function getRulePopupTitle(rule : APDRule) : String {
    return DisplayKey.get("Web.APDRulePopup.Title", getRuleTypeString(rule))
  }

  public static function getResultingLabel(rule : APDRule) : String {
    return DisplayKey.get("Web.APDAttributeRule.APDRuleElement.ResultingValue", getRuleTypeString(rule))
  }
}