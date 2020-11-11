package gw.sbt.pca.view.presenter.compare

uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.model.clause.CovTerm
uses gw.sbt.model.clause.DataType
uses gw.sbt.model.comparisons.CovTermComparison
uses gw.sbt.pca.view.DecisionHandler

uses java.util.List

uses gw.api.locale.DisplayKey
uses gw.sbt.pca.view.presenter.PresenterUtil

class CovTermComparisonPresenter extends ProductModelComparisonRowPresenter<CovTerm> {

  construct(covTermComparison : CovTermComparison,
            decisionHandler : DecisionHandler, isMaintenanceUpdate : boolean = false) {
    super(covTermComparison, createAttrAndCovTermOptionPresenters(covTermComparison, decisionHandler, isMaintenanceUpdate),
        decisionHandler, isMaintenanceUpdate)
  }

  private static function createAttrAndCovTermOptionPresenters(
      covTermComparison : CovTermComparison,
      decisionHandler : DecisionHandler,
      isMaintenanceUpdate : boolean) : List<StateUpdateComparisonPresenter> {

    var attributePresenters = createAttributePresenters(covTermComparison.Attributes, decisionHandler, \p -> {
      p.attribute("Description",
          :label = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.CovTerm.Description"))
      p.attribute("Required",
          :label = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.CovTerm.Required"))
      p.attribute("ValueType",
          :label = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.CovTerm.ValueType"))
      p.attribute("DefaultValue",
          :label = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.CovTerm.DefaultValue"))
      p.attribute("MinValue",
          :label = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.CovTerm.MinValue"))
      p.attribute("MaxValue",
          :label = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.CovTerm.MaxValue"))
      p.attribute("Priority",
          :label = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.CovTerm.Priority"))
    })

    var attributesCategoryPresenter = new ClauseDetailsCategoryPresenter(
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Clause.Attributes"),
        covTermComparison,
        attributePresenters
    )

    if (covTermComparison.CanonicalVersion.DataType == DataType.OPTION) {
      var optionComparisons = covTermComparison.Options

      var optionPresenters = optionComparisons
          .orderBy(\comparison -> comparison.CanonicalVersion.Priority)
          .map(\comparison -> new CovTermOptionComparisonPresenter(comparison, decisionHandler, isMaintenanceUpdate))

      var optionsCategoryPresenter = new ClauseDetailsCategoryPresenter(
          DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.CovTerm.Options"), covTermComparison, optionPresenters
      )

      return {attributesCategoryPresenter, optionsCategoryPresenter}
    }

    return {attributesCategoryPresenter}
  }

  override property get Description() : String {
    return Comparison.New.Description ?: Comparison.CanonicalVersion.Description
  }

  override property get CurrentValue() : String {
    var clause = Comparison.Parent.CanonicalVersion as gw.sbt.model.clause.Clause

    if (Comparison.Current.EffectiveAvailability.Availability == Lookup.AVAILABLE) {
      return Lookup.AVAILABLE
    } else if (!PresenterUtil.checkPatternExistence(clause.PublicId, Comparison.CanonicalVersion.PublicId)) {
      return Lookup.DOES_NOT_EXIST
    } else {
      return Lookup.UNAVAILABLE
    }
  }

  override property get NewValue() : String {
    return displayValueFor(Comparison.New)
  }

  override property get AdoptedValue() : String {
    return displayValueFor(Comparison.Adopted)
  }

  override protected function displayValueFor(covTerm : CovTerm) : String {
    return displayValueFor(covTerm.EffectiveAvailability)
  }
}