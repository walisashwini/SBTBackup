package gw.sbt.pca.view.presenter

uses gw.sbt.model.Risk
uses gw.sbt.model.RiskAttribute
uses java.util.Collection
uses java.util.List

class RiskRowPresenter extends CategoryPresenter {
  var _risk : Risk
  construct(risk: Risk) {
    super(createChildren(risk.RiskAttributes), risk.DecisionAndInstructions)
    _risk = risk
  }

  override property get Description(): String {
    return _risk.Name
  }

  override property get DiffType(): UpdateDiffType {
    return null
  }

  static function createChildren(riskAttributes: Collection< RiskAttribute >): List<RowPresenter> {
    return riskAttributes
        .where(\ attribute -> not attribute.CountrywideOnly)
        .map(\ attribute -> new RiskAttributeRowPresenter(attribute))
        .orderBy(\ presenter -> presenter.Description)
  }

  override function detailsAvailableToShow(): boolean {
    return false
  }

  override property get Selectable(): boolean {
    return true
  }
}