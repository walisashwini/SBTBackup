package gw.sbt.pca.view.presenter.compare

uses gw.api.tree.RowTreeRootNode
uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.comparisons.ClauseComparison
uses gw.sbt.pca.view.DecisionHandler

uses java.util.List

uses gw.api.locale.DisplayKey
uses gw.sbt.pca.view.presenter.PresenterUtil

class ClauseComparisonPresenter extends ProductModelComparisonRowPresenter<Clause> {

  var _originalClauseComparison : ClauseComparison
  var _clauseComparison : ClauseComparison

  // Prerequisite: Merged clause cannot be null, in order to generate a proper description
  construct(clauseComparison : ClauseComparison, decisionHandler : DecisionHandler, isMaintenanceUpdate : boolean = false) {
    super(clauseComparison, createAttrAndCovTermPresenters(clauseComparison, decisionHandler, isMaintenanceUpdate), decisionHandler, isMaintenanceUpdate)
    _originalClauseComparison = clauseComparison.cloneForRevert()
    _clauseComparison = clauseComparison
  }

  private static function createAttrAndCovTermPresenters(
      clauseComparison : ClauseComparison,
      decisionHandler : DecisionHandler,
      isMaintenanceUpdate : boolean) : List<StateUpdateComparisonPresenter> {
    var attributesCategoryPresenter = new ClauseDetailsCategoryPresenter(
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Clause.Attributes"),
        clauseComparison,
        createAttributePresenters(clauseComparison.Attributes, decisionHandler, \p -> {
          p.attribute("Description",
              :label = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.Clause.Description"))
          p.attribute("Category", :label = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.Clause.Category"))
          p.attribute("Existence",
              :label = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.Clause.Existence"))
        }))

    var covTermsCategoryPresenter = new ClauseDetailsCategoryPresenter(
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Clause.CovTerms"),
        clauseComparison,
        createCovTermPresenters(clauseComparison, decisionHandler, isMaintenanceUpdate))

    var scheduleCategoryPresenter = new ClauseDetailsCategoryPresenter(
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Clause.Schedule"),
        clauseComparison,
        createSchedulePropertyPresenters(clauseComparison, decisionHandler, isMaintenanceUpdate))

    return {attributesCategoryPresenter, scheduleCategoryPresenter, covTermsCategoryPresenter}.where(\p -> p.Children.HasElements)

  }

  private static function createSchedulePropertyPresenters(
      clauseComparison : ClauseComparison,
      decisionHandler : DecisionHandler,
      isMaintenanceUpdate : boolean = false) : List<SchedulePropertyComparisonPresenter> {

    return clauseComparison.ScheduleProperties.map(\comparison ->
        // TODO ScheduleProperty instances above with a decision field need to be supplied to the presenters
        new SchedulePropertyComparisonPresenter(
            comparison.CanonicalVersion.Description,
            comparison,
            decisionHandler,
            isMaintenanceUpdate))
  }

  private static function createCovTermPresenters(
      clauseComparison : ClauseComparison,
      decisionHandler : DecisionHandler,
      isMaintenanceUpdate : boolean = false) : List<CovTermComparisonPresenter> {

    var covTermComparisons = clauseComparison.CovTerms.where(\covTermComparison -> covTermComparison.HasValue)

    return covTermComparisons
        .map(\comparison -> new CovTermComparisonPresenter(comparison, decisionHandler, isMaintenanceUpdate))
        .orderBy(\presenter -> presenter.Description)
  }

  override property get Description() : String {
    var priorityClause = Comparison.New ?: Comparison.CanonicalVersion
    if (priorityClause.ParentRisk.Entity == "GL7SublineType") {
      return priorityClause.Description + " (" + priorityClause.PublicId + ")"
    } else {
      return priorityClause.Description + " (" + priorityClause.ParentRisk.Name + ")"
    }
  }

  override property get CurrentValue() : String {
    if (Comparison.Current.EffectiveAvailability.Availability == Lookup.AVAILABLE) {
      return Lookup.AVAILABLE
    } else if (!PresenterUtil.checkPatternExistence(Comparison.CanonicalVersion.PublicId)) {
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

  override protected function displayValueFor(clause : Clause) : String {
    return displayValueFor(clause.EffectiveAvailability)
  }

  function getTreeRootNode() : RowTreeRootNode {
    return new RowTreeRootNode({this}, \diff -> (diff as StateUpdateComparisonPresenter).Children,
        \diff -> (diff as StateUpdateComparisonPresenter).Description != DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Clause.Attributes")
            or (diff as StateUpdateComparisonPresenter).Children.hasMatch(\childPresenter -> childPresenter.IsDecisionRequired))
  }

  function revertChanges() {
    _clauseComparison.copyDecisionsAndInstructionsFrom(_originalClauseComparison)
  }
}