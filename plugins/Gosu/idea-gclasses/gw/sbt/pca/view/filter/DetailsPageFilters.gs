package gw.sbt.pca.view.filter

uses gw.api.filters.StandardBeanFilter
uses gw.api.locale.DisplayKey
uses gw.sbt.pca.view.presenter.compare.StateUpdateBureauCodeRowComparisonPresenter
uses gw.sbt.pca.view.presenter.compare.StateUpdateComparisonPresenter
uses gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateTableFactorRowComparisonPresenter

class DetailsPageFilters extends ComparisonFilters<StateUpdateComparisonPresenter> {

  property get DecisionRequired() : StandardBeanFilter {
    return new StandardBeanFilter(
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.Filter.DecisionRequired"),
        \ row -> isDecisionRequiredFor(row))
  }

  private function isDecisionRequiredFor(row : Object) : boolean {
    return row typeis StateUpdateComparisonPresenter and
        (row.IsDecisionRequired or childrenOf(row).hasMatch(\ child -> isDecisionRequiredFor(child)))
  }

  property get DifferenceFilterGroup() : StandardBeanFilter[] {
    return { DecisionRequiredAndISOChanges, DecisionRequiredAndCustomizations }
  }

  property get DecisionRequiredAndISOChanges() : StandardBeanFilter {
    return new StandardBeanFilter(
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.Filter.DecisionRequiredIsoChanges"),
        \ row -> isDecisionRequiredFor(row) and hasISOChanges(row))
  }

  property get DecisionRequiredAndCustomizations() : StandardBeanFilter {
    return new StandardBeanFilter(
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.Filter.DecisionRequiredCustomizations"),
        \ row -> isDecisionRequiredFor(row) and hasCustomizations(row))
  }

  protected override function childrenOf(row : StateUpdateComparisonPresenter) : List<StateUpdateComparisonPresenter> {
    return row.Children
  }

  protected override function diffTypeOf(row : StateUpdateComparisonPresenter) : UpdateDiffType {
    if (row typeis StateUpdateRateTableFactorRowComparisonPresenter)
      return row.DiffType
    else if (row typeis StateUpdateBureauCodeRowComparisonPresenter)
      return row.DiffType
    else
      throw "#diffTypeOf not implemented for row of type '${row.IntrinsicType.DisplayName}'"
  }
}