package gw.sbt.pca.view.presenter.compare

uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.model.clause.ClauseAttribute
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.pca.view.DecisionHandler

class AttributeComparisonPresenter<T> extends ProductModelComparisonRowPresenter <ClauseAttribute<T>> {
  var _attributeName : String as Description

  construct(attributeName       : String,
            attributeComparison : Comparison<ClauseAttribute<T>>,
            decisionHandler     : DecisionHandler,
            isMaintenanceUpdate : boolean = false) {
    super(attributeComparison, null, decisionHandler, isMaintenanceUpdate)
    _attributeName = attributeName
  }

  override property get CurrentValue() : String {
    return displayValueFor(Comparison.Current)
  }

  override property get NewValue() : String {
    return displayValueFor(Comparison.New)
  }

  override property get AdoptedValue() : String {
    return displayValueFor(Comparison.Adopted)
  }

  override protected function displayValueFor(attribute : ClauseAttribute<T>) : String {
    var value = attribute.Value
    if (value == null)
      return Lookup.DOES_NOT_EXIST
    if(value typeis Boolean)
      return value.booleanValue() ? "Yes" : "No"
    else
      return value.toString()
  }
}