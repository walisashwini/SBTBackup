package gw.sbt.pca.view.presenter

uses gw.sbt.model.Risk
uses java.util.Collection
uses gw.sbt.model.DecisionAndInstructions
uses java.util.List
uses gw.api.locale.DisplayKey

class RiskCategoryPresenter extends CategoryPresenter {

  construct(risks: Collection<Risk>, categoryDecisionAndInstructions : DecisionAndInstructions) {
    super(createChildren(risks), categoryDecisionAndInstructions)
  }

  private static function createChildren(risks: Collection<Risk>): List<RowPresenter> {
    var risksWithStateSpecificVersion = risks.where(\ risk ->
        not risk.RiskAttributes.allMatch(\ attribute -> attribute.CountrywideOnly))
    return risksWithStateSpecificVersion
        .map(\ risk -> new RiskRowPresenter(risk))
        .orderBy(\ presenter -> presenter.Description)
  }

  override function detailsAvailableToShow(): boolean {
    return false
  }

  override property get Description(): String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RisksTitle")
  }

}