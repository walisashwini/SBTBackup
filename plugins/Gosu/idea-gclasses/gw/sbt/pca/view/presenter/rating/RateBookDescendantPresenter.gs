package gw.sbt.pca.view.presenter.rating

uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.rating.RateBookContent
uses gw.sbt.pca.view.presenter.RowPresenter
uses java.util.List

abstract class RateBookDescendantPresenter extends RowPresenter {
  var _ratebook: RateBookContent as DefiningRateBook

  construct(ratebook: RateBookContent, childrenRows: List<RowPresenter>) {
    super(childrenRows)
    _ratebook = ratebook
  }

  construct(ratebook: RateBookContent) {
    this(ratebook, {})
  }

  override property get Selectable(): boolean {
    return false
  }

  override property get Decision(): UpdateDecision {
    return DefiningRateBook.DecisionAndInstructions.Decision
  }

  override function detailsAvailableToShow(): boolean {
    return false
  }
}