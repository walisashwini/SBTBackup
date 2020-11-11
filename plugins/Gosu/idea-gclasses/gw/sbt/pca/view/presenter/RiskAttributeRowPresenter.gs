package gw.sbt.pca.view.presenter

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.RiskAttribute

class RiskAttributeRowPresenter extends RowPresenter {
  var _attribute: RiskAttribute

  construct(attribute: RiskAttribute) {
    super(attribute.Child != null ? {new RiskAttributeRowPresenter(attribute.Child)} : {})
    _attribute = attribute
  }

  override property get Description(): String {
    return _attribute.Description
  }

  override property get DiffType(): UpdateDiffType {
    return UpdateDiffType.from(_attribute.Intent)
  }

  override function detailsAvailableToShow(): boolean {
    return false
  }

  override property get Selectable(): boolean {
    return true
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _attribute.DecisionAndInstructions
  }
}