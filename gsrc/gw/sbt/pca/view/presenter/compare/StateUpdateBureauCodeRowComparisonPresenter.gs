package gw.sbt.pca.view.presenter.compare

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.bureau.DisplayableStateUpdateBureauCodesContainer
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.pca.view.DecisionHandler
uses gw.sbt.pca.view.DecisionRequiredStrategy
uses gw.sbt.pca.view.presenter.PresenterUtil

class StateUpdateBureauCodeRowComparisonPresenter extends StateUpdateComparisonPresenter {
  var _comparison : Comparison<DisplayableStateUpdateBureauCodesContainer> as DisplayableContainerComparison
  var _keyColumnNames: List<String> = {}

  construct(comparison : Comparison<DisplayableStateUpdateBureauCodesContainer>, keyColumnNames: List<String>, decisionHandler : DecisionHandler,
            isMaintenanceUpdate : boolean = false) {
    super(null, decisionHandler, isMaintenanceUpdate)
    _comparison = comparison
    _keyColumnNames = keyColumnNames
  }

  property get DiffIconType() : String {
    return PresenterUtil.getDifferenceIconName(DiffType, false)
  }

  property get DiffType() : UpdateDiffType {
    if (_comparison.Adopted == null and _comparison.New != null)
      return TC_NEW
    else if (_comparison.Adopted != null and _comparison.New == null)
      return TC_DELETED
    else if (_comparison.Adopted.ValueRepresentation != _comparison.New.ValueRepresentation)
      return TC_CHANGED
    else
      return TC_NOCHANGE
  }

  property get Color() : String {
    if(IsDecisionRequired) {
      return PresenterUtil.GUIDEWIRE_COLOR_CODE_BLUE
    } else {
      return PresenterUtil.GUIDEWIRE_COLOR_CODE_BLANK
    }
  }

  override property get Description() : String {
    return ""
  }

  override property get CurrentValue() : String {
    if(IsDecisionRequired){
      comparisonModelWithDeltaInCurrentNewAdopted()
    }
    return displayValueFor(_comparison.Current)
  }

  override property get NewValue() : String {
    if(IsDecisionRequired){
      comparisonModelWithDeltaInCurrentNewAdopted()
    }
    return displayValueFor(_comparison.New)
  }

  override property get AdoptedValue() : String {
    if(IsDecisionRequired){
      comparisonModelWithDeltaInCurrentNewAdopted()
    }
    return displayValueFor(_comparison.Adopted)
  }

  override property get IsDecisionRequired() : boolean {
    if (_isMaintenanceUpdate and not _comparison.CompareAdoptedToNew.IsDifferentOverall) {
      return false
    }

    return new DecisionRequiredStrategy().isDecisionRequiredFor(_comparison)
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _comparison.DecisionAndInstructions
  }

  override property set Decision(updateDecision: UpdateDecision) {
    if(DecisionAndInstructions != null) {
      DecisionAndInstructions.Decision = updateDecision
    }

    DecisionHandler?.propagateDecision(_comparison, _isMaintenanceUpdate) // pass in comparison object for ComparisonDecisionHandler
  }

  property get KeyColumnValues() : List<String> {
    var keyColumnValues : List<String> = {}
    _keyColumnNames.each(\keyName -> {
      var keyColumnAttribute = _comparison.CanonicalVersion.DefiningKeys.firstWhere(\definingKey -> definingKey.Name == keyName)
      if (keyColumnAttribute != null and keyColumnAttribute.Value.HasContent) {
        keyColumnValues.add(keyColumnAttribute.Value)
      } else {
        keyColumnValues.add("-")
      }
    })
    return keyColumnValues
  }

  //return false if there is no value column
  property get HasValueColumn() : boolean {
    return _comparison.CanonicalVersion.HasValueColumn
  }

  private function displayValueFor(rowVersion : DisplayableStateUpdateBureauCodesContainer) : String {
    if (rowVersion != null and rowVersion.ValueRepresentation.HasContent) {
      return rowVersion.ValueRepresentation
    }

    return "-"
  }

  /*
    This method displays only different values (deltas) in new, current and adopted and removes common values
  */
  private function comparisonModelWithDeltaInCurrentNewAdopted() {

    var listOfNewAdoptedValues : List<String> = {}
    var listOfAdoptedCurrentValues : List<String> = {}
    var listOfCommonValues : List<String> = {}

    listOfNewAdoptedValues = _comparison.New.Codes*.Value*.DisplayValue.intersect(_comparison.Adopted.Codes*.Value*.DisplayValue).toList()
    listOfAdoptedCurrentValues = _comparison.Adopted.Codes*.Value*.DisplayValue.intersect(_comparison.Current.Codes*.Value*.DisplayValue).toList()

    if(listOfNewAdoptedValues != null and listOfAdoptedCurrentValues != null){
      listOfCommonValues = listOfNewAdoptedValues.intersect(listOfAdoptedCurrentValues).toList()
    }

    if(listOfCommonValues != null and listOfCommonValues.HasElements){
      for (item in listOfCommonValues) {
        _comparison.New.Codes.removeWhere(\elt -> elt.Value.DisplayValue == item)
        _comparison.Adopted.Codes.removeWhere(\elt -> elt.Value.DisplayValue == item)
        _comparison.Current.Codes.removeWhere(\elt -> elt.Value.DisplayValue == item)
      }
    }
  }

}