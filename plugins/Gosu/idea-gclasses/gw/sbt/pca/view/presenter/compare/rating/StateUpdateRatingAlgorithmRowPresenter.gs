package gw.sbt.pca.view.presenter.compare.rating

uses gw.api.locale.DisplayKey
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.comparisons.TwoWayCompare
uses gw.sbt.model.rating.RatingAlgorithm
uses gw.sbt.pca.view.presenter.PresenterUtil
uses gw.sbt.pca.view.presenter.compare.UpdatesComparisonRowPresenter

class StateUpdateRatingAlgorithmRowPresenter extends UpdatesComparisonRowPresenter {
  var _ratingAlgorithmComparison : Comparison<RatingAlgorithm> as RatingAlgorithmComparison

  construct(ratingAlgorithmComparison:  Comparison<RatingAlgorithm>, newSBTEdition: String, adoptedSBTEdition: String,
            newCWEdition : String = null, adoptedCWEdition : String = null) {
    super(ratingAlgorithmComparison, newSBTEdition, adoptedSBTEdition, newCWEdition, adoptedCWEdition)
    _ratingAlgorithmComparison = ratingAlgorithmComparison
  }

  override property get Description() : String {
    var suffix = _ratingAlgorithmComparison.CanonicalVersion.Jurisdiction.HasContent
        ? DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateBook.RatingStateSuffix")
        : DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateBook.RatingCWSuffix")
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateBook.RatingLabel",
        _ratingAlgorithmComparison.CanonicalVersion.Name, suffix)
  }

  override property get TwoWayCompareStrategy() : TwoWayCompare {
    return _ratingAlgorithmComparison.CompareAdoptedToNew
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _ratingAlgorithmComparison.DecisionAndInstructions
  }

  override function detailsAvailableToShow(): boolean {
    return false
  }

  override property get Selectable(): boolean {
    return true
  }

  override  property get Visible() : boolean {
    if (_isMaintenanceUpdate) {
      return DiffType != UpdateDiffType.TC_NOCHANGE
    }

    return getDiffType(_ratingAlgorithmComparison.CompareAdoptedToNew)!= UpdateDiffType.TC_NOCHANGE
  }
}