package gw.sbt.pca.view.presenter

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.clause.CovTerm
uses gw.sbt.model.clause.DataType
uses gw.sbt.pca.view.DecisionHandler
uses java.util.List
uses gw.api.locale.DisplayKey

class CovTermRowPresenter extends RowPresenter {
  var _covTerm: CovTerm
  construct(covTerm: CovTerm, decisionHandler : DecisionHandler) {
    super(createCovTermChildrenPresenters(covTerm, decisionHandler), decisionHandler)
    _covTerm = covTerm
  }

  private static function createCovTermChildrenPresenters(covTerm: CovTerm,  decisionHandler : DecisionHandler): List<RowPresenter> {
    var children = {createAttrDescriptionPresenter(covTerm)}
    if (covTerm.DataType == DataType.OPTION) {
      children.add(createOptionDescriptionPresenter(covTerm, decisionHandler))
    }
    return children
  }

  private static function createOptionDescriptionPresenter(covTerm: CovTerm, decisionHandler : DecisionHandler): RowPresenter {
    // Build the options node and its children
    return new DescriptionRowPresenter(
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.CovTerm.Options"),
            covTerm.CovTermOptions.sortBy(\o -> o.Priority).map(\covTermOption ->
                new CovTermOptionRowPresenter(covTermOption, decisionHandler)).toList())
  }

  private static function createAttrDescriptionPresenter(covTerm: CovTerm): RowPresenter {
    var attributesPresenters = {
        attributeDisplayValue(covTerm.Required, (\v -> DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.CovTerm.RequiredDescription", v ? "Yes" : "No"))),
        attributeDisplayValue(covTerm.ValueType?.capitalize(), (\v -> DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.CovTerm.ValueTypeDescription", v))),
        attributeDisplayValue(covTerm.DefaultValue, (\v -> DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.CovTerm.DefaultValueDescription", v))),
        attributeDisplayValue(covTerm.MinValue, (\v -> DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.CovTerm.MinimumValueDescription", v))),
        attributeDisplayValue(covTerm.MaxValue, (\v -> DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.CovTerm.MaximumValueDescription", v))),
        attributeDisplayValue(covTerm.Priority, (\v -> DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.CovTerm.Priority", v)))
    }.where(\a -> a != null).map(\a -> new DescriptionRowPresenter(a, null))

    return new DescriptionRowPresenter(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.CovTerm.Attributes"), attributesPresenters)
  }

  override property get Description(): String {
    return _covTerm.Description
  }

  override property get DiffType(): UpdateDiffType {
    return UpdateDiffType.from(_covTerm.Intent)
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _covTerm.DecisionAndInstructions
  }

  override function detailsAvailableToShow(): boolean {
    return false
  }

  private static function attributeDisplayValue<T>(value: T, display: block(v: T): String): String {
    return value == null ? null : display(value)
  }
}