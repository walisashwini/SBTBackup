package gw.sbt.pca.view.filter

uses gw.api.filters.StandardBeanFilter
uses gw.api.locale.DisplayKey
uses gw.sbt.pca.view.presenter.RowPresenter

class ListOfUpdatesFilters extends ComparisonFilters<RowPresenter> {

  property get DifferenceFilterGroup() : StandardBeanFilter[] {
    return { ISOChanges, Customizations }
  }

  property get ISOChanges() : StandardBeanFilter {
    return new StandardBeanFilter(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.Filter.IsoChanges"),
        \ row -> hasISOChanges(row))
  }

  property get Customizations() : StandardBeanFilter {
    return new StandardBeanFilter(
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.Filter.Customizations"),
        \ row -> hasCustomizations(row))
  }

  protected override function childrenOf(row : RowPresenter) : List<RowPresenter> {
    return row.Children
  }

  protected override function diffTypeOf(row : RowPresenter) : UpdateDiffType {
    return row.DiffType
  }
}