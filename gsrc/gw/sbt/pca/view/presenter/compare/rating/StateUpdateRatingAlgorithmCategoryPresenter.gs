package gw.sbt.pca.view.presenter.compare.rating

uses gw.api.locale.DisplayKey
uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.rating.RatingAlgorithm
uses gw.sbt.pca.view.presenter.CategoryPresenter
uses gw.sbt.pca.view.presenter.PresenterUtil
uses gw.sbt.pca.view.presenter.RowPresenter
uses gw.sbt.util.DisplayDescriptionHelper

class StateUpdateRatingAlgorithmCategoryPresenter extends CategoryPresenter {
  construct(newRatingAlgorithms : Collection<RatingAlgorithm>,
            adoptedRatingAlgorithms : Collection<RatingAlgorithm>,
            ratingAlgorithmCategoryDecisionAndInstructions : DecisionAndInstructions,
            newSBTUpdateMetaData: SBTUpdateMetaData,
            adoptedSBTUpdateMetaData: SBTUpdateMetaData,
            newSBTUpdate : SBTUpdate) {
    super(createRatingAlgorithmPresenters(newRatingAlgorithms, adoptedRatingAlgorithms,
        newSBTUpdateMetaData, adoptedSBTUpdateMetaData, newSBTUpdate), ratingAlgorithmCategoryDecisionAndInstructions,
        PresenterUtil.isMaintenanceUpdate(
            DisplayDescriptionHelper.getMetaDataEdition(newSBTUpdateMetaData),
            DisplayDescriptionHelper.getMetaDataEdition(adoptedSBTUpdateMetaData),
            DisplayDescriptionHelper.getMetaDataCWEdition(newSBTUpdateMetaData),
            DisplayDescriptionHelper.getMetaDataCWEdition(adoptedSBTUpdateMetaData)
        ))
  }

  private static function createRatingAlgorithmPresenters(newRatingAlgorithms : Collection<RatingAlgorithm>,
                                                          adoptedRatingAlgorithms : Collection<RatingAlgorithm>,
                                                          newSBTUpdateMetaData: SBTUpdateMetaData,
                                                          adoptedSBTUpdateMetaData: SBTUpdateMetaData,
                                                          newSBTUpdate : SBTUpdate) : List<RowPresenter> {
    var algorithmCodes = newRatingAlgorithms*.Code.union(adoptedRatingAlgorithms*.Code)
    return algorithmCodes.map(\algorithmCode -> {
      var comparison = Comparison.forRatingAlgorithm(
          newRatingAlgorithms.firstWhere(\algorithm -> algorithm.Code == algorithmCode),
          adoptedRatingAlgorithms.firstWhere(\algorithm -> algorithm.Code == algorithmCode),
          ComparisonDecisionSource.create(newSBTUpdate))

      return new StateUpdateRatingAlgorithmRowPresenter(comparison,
          DisplayDescriptionHelper.getMetaDataEdition(newSBTUpdateMetaData),
          DisplayDescriptionHelper.getMetaDataEdition(adoptedSBTUpdateMetaData),
          DisplayDescriptionHelper.getMetaDataCWEdition(newSBTUpdateMetaData),
          DisplayDescriptionHelper.getMetaDataCWEdition(adoptedSBTUpdateMetaData))
    }).where(\presenter -> presenter.Visible).orderBy(\presenter -> presenter.Description)
  }

  override property get Description(): String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RatingAlgorithmsTitle")
  }

  override property get Selectable() : boolean {
    return true
  }

  override function getUpdateDecisionDescription() : String {
    return gw.sbt.util.DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(Decision)
  }
}