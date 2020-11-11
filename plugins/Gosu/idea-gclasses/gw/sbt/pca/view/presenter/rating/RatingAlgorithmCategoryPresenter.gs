package gw.sbt.pca.view.presenter.rating

uses gw.sbt.pca.view.presenter.RowPresenter
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.rating.RateBookContent
uses java.util.List
uses gw.api.locale.DisplayKey

class RatingAlgorithmCategoryPresenter extends RateBookDescendantPresenter {
  construct(ratebook: RateBookContent) {
    super(ratebook, createChildrenAlgorithmRows(ratebook))
  }

  override property get Description(): String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RatingAlgorithmsTitle")
  }

  static function createChildrenAlgorithmRows(ratebook: RateBookContent): List<RowPresenter> {
    return ratebook.Algorithms
        .where(\algorithm -> algorithm.Jurisdiction.HasContent)
        .map(\algorithm -> new RatingAlgorithmRowPresenter(algorithm))
        .sortBy(\treeRow -> treeRow.Description)
        .toList()
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return DefiningRateBook.DecisionAndInstructionsForAlgorithms
  }

  override property get DiffType(): UpdateDiffType {
    return null
  }
}