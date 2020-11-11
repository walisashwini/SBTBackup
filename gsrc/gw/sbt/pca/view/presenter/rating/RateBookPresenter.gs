package gw.sbt.pca.view.presenter.rating

uses gw.sbt.pca.view.presenter.RowPresenter
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.rating.RateBookContent
uses java.util.List
uses gw.api.locale.DisplayKey

class RateBookPresenter extends RowPresenter {
  var _ratebook: RateBookContent
  construct(ratebook: RateBookContent) {
    super(createRateBookChildren(ratebook), null)
    _ratebook = ratebook
  }

  private static function createRateBookChildren(ratebook: RateBookContent): List<RowPresenter> {
    var children: List<RowPresenter> = {}
    if (ratebook.RateTables.HasElements){
      children.add(new RateTableCategoryPresenter (ratebook))
    }

    if (ratebook.Algorithms.HasElements){
      children.add(new RatingAlgorithmCategoryPresenter (ratebook))
    }
    return children
  }

  override property get Description(): String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RatingTitle", _ratebook.Description, _ratebook.Edition)
  }

  override function detailsAvailableToShow(): boolean {
    return false
  }

  override property get DiffType(): UpdateDiffType {
    return null
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _ratebook.DecisionAndInstructions
  }
}
