package gw.sbt.pca.view.presenter

uses gw.api.tree.RowTreeRootNode
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.clause.CovTerm
uses gw.sbt.pca.view.DecisionHandler
uses gw.sbt.util.Serializer
uses java.util.List
uses gw.api.locale.DisplayKey

class ClauseDetailsPresenter extends RowPresenter {
  var _clause: Clause
  var _originalClause : Clause

  construct(clause: Clause, decisionHandler : DecisionHandler) {
    super(createAttrAndCovTermPresenters(clause, decisionHandler), decisionHandler)
    _clause = clause
    _originalClause = Serializer.makeCopy(clause)
  }

  private static function createAttrAndCovTermPresenters(clause: Clause, decisionHandler : DecisionHandler): List<RowPresenter> {
    var attributesHeadingPresenter = new DescriptionRowPresenter(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Clause.Attributes"),
        {new DescriptionRowPresenter(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Clause.CategoryDescription", clause.Category), null),
         new DescriptionRowPresenter(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Clause.ExistenceDescription", clause.Existence), null)})

    var covTermsHeadingPresenter = new DescriptionRowPresenter(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Clause.CovTerms"),
        createCovTermPresenters(clause.CovTerms, decisionHandler))

    var schedule = clause.Schedule
    var scheduleHeadingPresenter = new DescriptionRowPresenter(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Clause.Schedule"),
      schedule?.Properties?.map( \ prop -> new DescriptionRowPresenter(prop.Description, null)))


    return {attributesHeadingPresenter, scheduleHeadingPresenter, covTermsHeadingPresenter}.where( \ p -> p.Children.HasElements) // include headers if they have children
  }

  private static function createCovTermPresenters(covTerms: List<CovTerm>, decisionHandler : DecisionHandler): List<CovTermRowPresenter> {
    return covTerms.map(\covTerm -> new CovTermRowPresenter(covTerm, decisionHandler))
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _clause.DecisionAndInstructions
  }

  override property get Description(): String {
    return _clause.Description + " (" + _clause.ParentRisk.Name + ")"
  }

  override property get DiffType(): UpdateDiffType {
    return UpdateDiffType.from(_clause.Intent)
  }

  function getTreeRootNode(): RowTreeRootNode {
    return new RowTreeRootNode({this}, \diff -> (diff as RowPresenter).Children,
      \diff -> (diff as RowPresenter).Description != DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Clause.Attributes"))
  }

  override function detailsAvailableToShow(): boolean {
    return false
  }

  function revertChanges() {
    PresenterUtil.revertChanges(_originalClause, _clause)
  }

}