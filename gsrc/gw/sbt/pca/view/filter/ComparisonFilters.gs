package gw.sbt.pca.view.filter

uses gw.api.filters.StandardBeanFilter
uses gw.api.locale.DisplayKey

abstract class ComparisonFilters<T> {

  static function forListOfUpdates() : ListOfUpdatesFilters {
    return new ListOfUpdatesFilters()
  }

  static function forDetailsPage() : DetailsPageFilters {
    return new DetailsPageFilters()
  }

  static property get All() : StandardBeanFilter {
    return new StandardBeanFilter(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.Filter.All"),
        \ row -> true)
  }

  protected function hasISOChanges(row : Object) : boolean {
    return row typeis T and itemOrDescendantHasDiffTypeThatSatisfies(row, \ diffType -> diffType != TC_NOCHANGE)
  }

  protected function hasCustomizations(row : Object) : boolean {
    return row typeis T and itemOrDescendantHasDiffTypeThatSatisfies(row, \ diffType -> diffType == TC_NOCHANGE)
  }

  protected abstract function childrenOf(row : T) : List<T>

  protected abstract function diffTypeOf(row : T) : UpdateDiffType

  private function itemOrDescendantHasDiffTypeThatSatisfies(
      item : T,
      predicate(diffType : UpdateDiffType) : boolean
  ) : boolean {
    // A diff type of null indicates a category node that should be included if and only if any non-category
    // descendants are allowed by the filter.
    return (diffTypeOf(item) != null and predicate(diffTypeOf(item))) or
        childrenOf(item).hasMatch(\ child -> itemOrDescendantHasDiffTypeThatSatisfies(child, predicate))
  }
}