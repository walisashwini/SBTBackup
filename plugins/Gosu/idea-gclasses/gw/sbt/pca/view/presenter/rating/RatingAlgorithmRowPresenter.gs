package gw.sbt.pca.view.presenter.rating

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.rating.RatingAlgorithm

class RatingAlgorithmRowPresenter extends RateBookDescendantPresenter {
  private var _algorithm: RatingAlgorithm
  construct(algorithm: RatingAlgorithm) {
    super(algorithm.OwningRateBook)
    _algorithm = algorithm
  }

  override property get Description(): String {
    return _algorithm.Name
  }

  override function detailsAvailableToShow(): boolean {
    return false
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _algorithm.DecisionAndInstructions
  }

  override property get DiffType(): UpdateDiffType {
    return UpdateDiffType.from(DefiningRateBook.Intent)
  }
}