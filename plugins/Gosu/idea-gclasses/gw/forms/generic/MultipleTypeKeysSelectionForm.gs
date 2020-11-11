package gw.forms.generic

uses gw.api.locale.DisplayKey
uses gw.entity.ITypeList
uses gw.entity.TypeKey
uses gw.validation.PCValidationBase
uses gw.xml.XMLNode

class MultipleTypeKeysSelectionForm extends AbstractMultipleValueSelectionForm {

  override property get InferredByCurrentData(): boolean {
    if (_coverables.IsEmpty) {
      return false
    }
    if (Pattern.CoverableTypeKeyExistsOnAll) {
      for (var c in _coverables) {
        if (not acceptCoverable(c)) {
          return false
        }
      }
      return true
    } else {
      for (var c in _coverables) {
        if (acceptCoverable(c)) {
          return true
        }
      }
      return false
    }
  }

  override function addDataForComparisonOrExport(contentNode: XMLNode) {
    contentNode.addChild(createTextNode("CoverableTypeList", Pattern.CoverableTypeList))

    var covTypeKeys = new XMLNode("CoverableTypeKeys")
    Pattern.CoverableTypeKeys.each( \ typeKey -> {
      covTypeKeys.addChild(createTextNode("FormPatternTypeKey", typeKey.Code))
    })
    contentNode.addChild(covTypeKeys)


    var allCoverablesNode = new XMLNode("Coverables")
    contentNode.addChild(allCoverablesNode)
    for (var c in _coverables) {
      if (acceptCoverable(c)) {
        var coverableNode = new XMLNode("Coverable")
        coverableNode.addChild(createTextNode("FixedId", c.TypeIDString))
        allCoverablesNode.addChild(coverableNode)
      }
    }
  }

  function acceptCoverable(c : Coverable) : boolean {
    return Pattern.CoverableTypeKeys*.Code.contains((c[Pattern.CoverableTypeList] as TypeKey).Code)
  }

  override property get DisplayName(): String {
    return DisplayKey.get("Forms.Generic.MultipleTypeKeysSelectionForm")
  }

  override function hasAdditionalMissingReqiredFields(formPattern : FormPattern, validation : PCValidationBase) : boolean {
    if (formPattern.CoverableTypeList == null) {
      validation.Result.addError(formPattern, TC_DEFAULT, DisplayKey.get("Validation.FormPattern.Inference.MissingRequired", formPattern.DisplayName, "CoverableTypeList"))
      return true
    }
    if (!formPattern.CoverableTypeKeys.HasElements) {
      validation.Result.addError(formPattern, TC_DEFAULT, DisplayKey.get("Validation.FormPattern.Inference.MissingRequired", formPattern.DisplayName, "CoverableTypeKeys"))
      return true
    }
    return false
  }

  override function validateAdditionalFields(formPattern : FormPattern, validation : PCValidationBase) {
    if (formPattern.CoverableTypeListRef == null) {
      validation.Result.addError(formPattern, TC_DEFAULT, DisplayKey.get("Validation.FormPattern.Inference.IncompatibleCoverableTypeList", formPattern.DisplayName, formPattern.CoverableType, formPattern.CoverableTypeList))
      return
    }
    if (not (formPattern.CoverableTypeListRef.FeatureType typeis ITypeList)) {
      validation.Result.addError(formPattern, TC_DEFAULT, DisplayKey.get("Validation.FormPattern.Inference.InvalidCoverableTypeList", formPattern.DisplayName, formPattern.CoverableTypeList))
      return
    }
    if (not formPattern.CoverableTypeKeys.HasElements) {
      validation.Result.addError(formPattern, TC_DEFAULT, DisplayKey.get("Validation.FormPattern.Inference.IncompatibleCoverableTypeKeys", formPattern.DisplayName, formPattern.CoverableTypeList, formPattern.CoverableTypeKeys*.Code))
    }
  }

  override function clearAdditionalFields(formPattern : FormPattern) {
    formPattern.CoverableTypeKeyExistsOnAll = false
    formPattern.CoverableTypeList = null
    formPattern.clearCoverableTypeKeys()
  }
}