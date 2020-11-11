package gw.sbt.pca.view.presenter.compare.rating

uses gw.api.locale.DisplayKey
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.rating.RateBookContent
uses gw.sbt.pca.view.presenter.CategoryPresenter
uses gw.sbt.model.SBTUpdate
uses gw.sbt.pca.view.presenter.RowPresenter

class StateUpdateRateBookPresenter extends CategoryPresenter {
  var _ratebook : RateBookContent

  construct(newRatebook : RateBookContent,
      adoptedRatebook : RateBookContent,
      newSBTUpdateMetaData : SBTUpdateMetaData,
      adoptedSBTUpdateMetaData : SBTUpdateMetaData,
      newSBTUpdate : SBTUpdate,
      currentSBTUpdate : SBTUpdate,
      adoptionDate: Date){
    super(createRateBookChildren(newRatebook, adoptedRatebook, newSBTUpdateMetaData, adoptedSBTUpdateMetaData,
                                 newSBTUpdate, currentSBTUpdate, adoptionDate),
          newRatebook.DecisionAndInstructions)
    _ratebook = newRatebook
  }

  private static function createRateBookChildren(newRatebook : RateBookContent,
                                               adoptedRatebook : RateBookContent,
                                               newSBTUpdateMetaData: SBTUpdateMetaData,
                                               adoptedSBTUpdateMetaData: SBTUpdateMetaData,
                                               newSBTUpdate : SBTUpdate,
                                               currentSBTUpdate : SBTUpdate,
                                               adoptionDate: Date): List<RowPresenter> {
    var children: List<RowPresenter> = {}
    var rateTableCategoryPresenter = new StateUpdateRateTableCategoryPresenter(
        newRatebook.RateTables, adoptedRatebook.RateTables, newRatebook, adoptedRatebook, newSBTUpdateMetaData,
        adoptedSBTUpdateMetaData, newSBTUpdate, currentSBTUpdate, adoptionDate)
    if(rateTableCategoryPresenter.Children.HasElements) {
      children.add(rateTableCategoryPresenter)
    }

    var ratingAlgorithmCategoryPresenter = new StateUpdateRatingAlgorithmCategoryPresenter(
        newRatebook.Algorithms, adoptedRatebook.Algorithms,
        newRatebook.DecisionAndInstructionsForAlgorithms, newSBTUpdateMetaData, adoptedSBTUpdateMetaData, newSBTUpdate)
    if(ratingAlgorithmCategoryPresenter.Children.HasElements) {
      children.add(ratingAlgorithmCategoryPresenter)
    }

    return children
  }

  function propagateChildrenDecisionsToNewRateBook() {
    _ratebook.DecisionAndInstructions.Decision = Decision
    Children.each(\rowPresenter -> {
      if(rowPresenter typeis StateUpdateRateTableCategoryPresenter) {
        _ratebook.DecisionAndInstructionsForRateTables.Decision = Decision
      } else if(rowPresenter typeis StateUpdateRatingAlgorithmCategoryPresenter) {
        _ratebook.DecisionAndInstructionsForAlgorithms.Decision = Decision
      }
    })
  }

  override property get Description(): String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RatingTitle", _ratebook.Description, _ratebook.Edition)
  }

  override property get Selectable(): boolean {
    return Children.hasMatch(\child -> child.Selectable)
  }

  override function detailsAvailableToShow(): boolean {
    return false
  }

  override property get DiffType(): UpdateDiffType {
    return null
  }

  override function getUpdateDecisionDescription() : String {
    return gw.sbt.util.DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(Decision)
  }
}