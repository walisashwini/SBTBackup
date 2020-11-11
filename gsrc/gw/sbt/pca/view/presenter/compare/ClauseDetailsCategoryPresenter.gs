package gw.sbt.pca.view.presenter.compare

uses gw.sbt.model.comparisons.Comparison
uses java.util.List

class ClauseDetailsCategoryPresenter extends StateUpdateComparisonPresenter {
  var _categoryName : String
  var _comparison : Comparison

  construct(categoryName : String, comparison : Comparison, childrenPresenters : List<StateUpdateComparisonPresenter>) {
    super(childrenPresenters, null)
    _comparison = comparison
    _categoryName = categoryName
  }

  override property get Description(): String {
    return _categoryName
  }

  override property get CurrentValue(): String {
    return null
  }

  override property get NewValue(): String {
    return null
  }

  override property get AdoptedValue(): String {
    return null
  }

  override property get IsDecisionRequired(): boolean {
    return false
  }
}