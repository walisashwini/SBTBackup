package gw.sbt.pca.view.presenter.compare

uses gw.lang.reflect.features.PropertyReference
uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.form.PolicyForm
uses gw.sbt.pca.view.presenter.PresenterUtil
uses gw.sbt.util.DisplayDescriptionHelper
uses java.util.List
uses gw.api.locale.DisplayKey

class FormComparisonPresenter {

  var _comparison : Comparison<PolicyForm>

  // TODO: Extract the logic common to FormComparisonDetailsPresenter and our own FormComparisonDetailsPresenter
  var _adopted : FormComparisonDetailsPresenter
  var _new     : FormComparisonDetailsPresenter
  var _current : FormComparisonDetailsPresenter
  var _newSBTEdition : String as NewSBTEdition
  var _adoptedSBTEdition : String as AdoptedSBTEdition

  var _readOnly : boolean

  construct(formComparison : Comparison<PolicyForm>, newSBTEdition : String, adoptedSBTEdition : String) {
    _comparison = formComparison
    _adopted = createPresenter(formComparison.Adopted)
    _new     = createPresenter(formComparison.New)
    _current = createPresenter(formComparison.Current)
    _newSBTEdition = newSBTEdition
    _adoptedSBTEdition = adoptedSBTEdition
  }

  property set ReadOnly(readOnly: boolean) {
    _readOnly = readOnly
    //set children to be readonly
    if(_adopted != null) {
      _adopted.ReadOnly = readOnly
    }
    if(_new != null) {
      _new.ReadOnly = readOnly
    }
    if(_current != null) {
      _current.ReadOnly = readOnly
    }
  }

  property get ReadOnly(): boolean {
    return _readOnly
  }

  private function createPresenter(form : PolicyForm) : FormComparisonDetailsPresenter {
    return form == null ? null : new FormComparisonDetailsPresenter(form)
  }

  property get DecisionAndInstructions() : DecisionAndInstructions {
    return _comparison.DecisionAndInstructions
  }

  property get FullDescription() : String {
    return _comparison.CanonicalVersion.Number + " " + _comparison.CanonicalVersion.Description
  }

  function revertChanges() {
    if(_new != null) {
      _new.revertChanges()
    }
  }

  property get Decision() : String {
    return DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(_comparison.DecisionAndInstructions.Decision)
  }

  property set Decision(label : String) {
    _comparison.DecisionAndInstructions.Decision = DisplayDescriptionHelper.getComparisonUpdateDecisionFromDescription(label)
  }

  property get NoDecisionSelectedLabel() : String {
    return DecisionAndInstructions.Decision != null ? DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.ClearDecision") : ""
  }

  // ******** Details Table *********

  property get DetailsTableHeaderRow() : List<String> {
    return {
        "",
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.CurrentValue"),
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.NewValue"),
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.AdoptedValue")
    }
  }

  property get DetailsTableRows() : List<DetailsRow> {
    return DetailsProperties.map(\ prop -> new DetailsRow(prop)).where(\ row -> row.IsVisible)
  }

  private property get DetailsProperties() : List<DetailsRowSpecification> {
    return {
      new DetailsRowSpecification(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Form.EditionDate"), FormComparisonDetailsPresenter#Edition),
      new DetailsRowSpecification(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Form.Description"), FormComparisonDetailsPresenter#FormDescription),
      new DetailsRowSpecification(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.GroupCode"), FormComparisonDetailsPresenter#InternalGroupCode),
      new DetailsRowSpecification(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Form.CWFormVersion"), FormComparisonDetailsPresenter#cwFormNumberAndDescription),
      new DetailsRowSpecification(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.InferenceMethod"), FormComparisonDetailsPresenter#InferenceMethod),
      new DetailsRowSpecification(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.InferenceDetails"), FormComparisonDetailsPresenter#InferenceDetails)
    }
  }

  private property get FormVersions() : List<FormComparisonDetailsPresenter> {
    return {_current, _new, _adopted}
  }


  class DetailsRow {
    var _rowSpecification : DetailsRowSpecification

    construct(rowSpecification : DetailsRowSpecification) {
      _rowSpecification = rowSpecification
    }

    property get Values() : List<String> {
      return FormVersions.map(\ version -> _rowSpecification.valueFor(version))
    }

    property get IsVisible() : boolean {
      return Values.hasMatch(\ value -> value.HasContent and value != Lookup.UNAVAILABLE)
    }

    property get Label() : String {
      return _rowSpecification.Label
    }

    property get ValueColor() : String {
      if(_rowSpecification.Label == DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Form.EditionDate")) {
        return PresenterUtil.GUIDEWIRE_COLOR_CODE_BLUE
      } else {
        return PresenterUtil.GUIDEWIRE_COLOR_CODE_BLANK
      }
    }
  }

  private static class DetailsRowSpecification {
    var _label : String as readonly Label
    var _presenterProperty : PropertyReference<FormComparisonDetailsPresenter, String>

    construct(label : String, presenterProperty : PropertyReference<FormComparisonDetailsPresenter, String>) {
      _label = label
      _presenterProperty = presenterProperty
    }

    function valueFor(detailsPresenter : FormComparisonDetailsPresenter) : String {
      if (detailsPresenter == null) {
        return Lookup.DOES_NOT_EXIST
      } else if (detailsPresenter.IsAvailable) {
        return _presenterProperty.get(detailsPresenter) // display actual property value
      } else {
        return Lookup.UNAVAILABLE
      }
    }
  }

}
