package gw.forms.generic

uses gw.api.locale.DisplayKey
uses gw.validation.PCValidationBase
uses gw.xml.XMLNode

class MulitpleSysTableValuesSelectionForm extends AbstractMultipleValueSelectionForm {

  override property get InferredByCurrentData() : boolean {
    if (_coverables.IsEmpty) {
      return false
    }
    if (Pattern.CovSysTableValueExistsOnAll) {
      return _coverables.allMatch(\c -> acceptCoverable(c))
    } else {
      return _coverables.hasMatch(\c -> acceptCoverable(c))
    }
  }

  override function addDataForComparisonOrExport(contentNode : XMLNode) {
    contentNode.addChild(createTextNode("CoverableSysTable", Pattern.CoverableSysTable))

    var sysTableValues = new XMLNode("CoverableSysTableValues")
    Pattern.CoverableSysTableValues.each(\value -> {
      sysTableValues.addChild(createTextNode("FormPatternSysTableValue", value.Code))
    })
    contentNode.addChild(sysTableValues)


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
    return Pattern.CoverableSysTableValues*.Code.contains(c[Pattern.CoverableSysTable] as String)
  }

  override property get DisplayName() : String {
    return DisplayKey.get("Forms.Generic.MultipleSysTableValuesSelectionForm")
  }


  override function hasAdditionalMissingReqiredFields(formPattern : FormPattern, validation : PCValidationBase) : boolean {
    if (formPattern.CoverableSysTable == null) {
      validation.Result.addError(formPattern, TC_DEFAULT, DisplayKey.get("Validation.FormPattern.Inference.MissingRequired", formPattern.DisplayName, "CoverableSysTable"))
      return true
    }
    if (!formPattern.CoverableSysTableValues.HasElements) {
      validation.Result.addError(formPattern, TC_DEFAULT, DisplayKey.get("Validation.FormPattern.Inference.MissingRequired", formPattern.DisplayName, "CoverableSysTableValues"))
      return true
    }
    return false
  }

  override function validateAdditionalFields(formPattern : FormPattern, validation : PCValidationBase) {
    if (formPattern.CoverableSysTableRef == null) {
      validation.Result.addError(formPattern, TC_DEFAULT, DisplayKey.get("Validation.FormPattern.Inference.IncompatibleCoverableTypeList", formPattern.DisplayName, formPattern.CoverableType, formPattern.CoverableSysTable))
      return
    }
    if (not formPattern.CoverableSysTableValues.HasElements) {
      validation.Result.addError(formPattern, TC_DEFAULT, DisplayKey.get("Validation.FormPattern.Inference.IncompatibleCoverableTypeKeys", formPattern.DisplayName, formPattern.CoverableSysTable, formPattern.CoverableSysTableValues*.Code))
    }
  }

  override function clearAdditionalFields(formPattern : FormPattern) {
    formPattern.CovSysTableValueExistsOnAll = false
    formPattern.CoverableSysTable = null
    formPattern.clearCoverableSysTableValues()
  }
}