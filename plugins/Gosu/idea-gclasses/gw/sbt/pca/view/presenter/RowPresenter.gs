package gw.sbt.pca.view.presenter

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.UpdateDecision
uses gw.sbt.pca.view.DecisionHandler

abstract class RowPresenter {
  var _children: List<RowPresenter> as readonly Children
  var _decisionHandler : DecisionHandler as DecisionHandler
  var _readOnly: boolean
  var _adoptionDate: Date as AdoptionDate
  protected static var _isMaintenanceUpdate : boolean = false

  construct(children: List<RowPresenter>) {
    _children = children ?: {}
  }

  construct(children: List<RowPresenter>, isMaintenanceUpdate : boolean) {
    _children = children ?: {}
    _isMaintenanceUpdate = isMaintenanceUpdate
  }

  construct(children: List<RowPresenter>, decisionHandler : DecisionHandler) {
    _children = children ?: {}
    _decisionHandler = decisionHandler
  }

  construct(children: List<RowPresenter>, decisionHandler : DecisionHandler, isMaintenanceUpdate : boolean) {
    _children = children ?: {}
    _decisionHandler = decisionHandler
    _isMaintenanceUpdate = isMaintenanceUpdate
  }

  abstract property get Description() : String

  abstract property get DiffType() : UpdateDiffType

  property get Difference(): String {
    return DiffType == null ? "" : DiffType.Description
  }

  property get IsNew(): boolean {
    return DiffType == UpdateDiffType.TC_NEW
  }

  property get IsChanged(): boolean {
    return DiffType == UpdateDiffType.TC_CHANGED
  }

  // Some row presenters do not have decision and instructions
  property get DecisionAndInstructions(): DecisionAndInstructions {
    return null
  }

  property get Decision(): UpdateDecision {
    return DecisionAndInstructions?.Decision
  }

  property set Decision(updateDecision: UpdateDecision) {
    if(DecisionAndInstructions != null) {
      if (_isMaintenanceUpdate and DiffType == UpdateDiffType.TC_NOCHANGE) {
        DecisionAndInstructions.Decision = UpdateDecision.REJECT
      } else {
        DecisionAndInstructions.Decision = updateDecision
      }
    }

    DecisionHandler?.propagateDecision(DecisionAndInstructions, _isMaintenanceUpdate)
  }

  property get Selectable(): boolean {
    return DiffType != TC_NOCHANGE
  }

  property get Visible() : boolean {
    return true
  }

  function showDetails() {
    // By default, do nothing.
  }

  //Defaulted to true because so far more implementations do have details to show
  function detailsAvailableToShow(): boolean {
    return true
  }

  function getUpdateDecisionDescription() : String {
    return gw.sbt.util.DisplayDescriptionHelper.getUpdateDecisionDescription(Decision)
  }

  property set ReadOnly(readOnly: boolean) {
    _readOnly = readOnly
    //note: recursively set readonly to all children
    _children.each(\child -> {
      child.ReadOnly = readOnly
    })
  }

  property get ReadOnly(): boolean {
    return _readOnly
  }

}