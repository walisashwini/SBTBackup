package gw.sbt.pca.view.presenter

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.UpdateDecision
uses java.util.List

abstract class CategoryPresenter extends RowPresenter {

  // Only used for instructions notes for the category
  private var _categoryDecisionAndInstructions : DecisionAndInstructions as DecisionAndInstructions

  construct(childrenPresenters: List<RowPresenter>, decisionAndNotes : DecisionAndInstructions, isMaintenanceUpdate : boolean = false) {
    super(childrenPresenters, isMaintenanceUpdate)
    _categoryDecisionAndInstructions = decisionAndNotes
  }

  override property get DiffType(): UpdateDiffType {
    return null
  }

  override property get Decision(): UpdateDecision {
    return DecisionHandler.aggregateDecision(Children*.Decision.toList())
  }

  override property set Decision(updateDecision : UpdateDecision) {
    Children.each(\childArtifactPresenter -> {
      if (not childArtifactPresenter.ReadOnly) {
        childArtifactPresenter.Decision = updateDecision
      }
    })
  }
}