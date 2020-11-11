package gw.sbt.pca.view

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.UpdateDecision
uses java.util.List

abstract class DecisionHandler<T> {
  protected var _isMaintenanceUpdate : boolean = false

  static function aggregateDecision(childrenDecisions: List<UpdateDecision>) : UpdateDecision {
    if (childrenDecisions.hasMatch( \ d -> d == null))
      return null

    return childrenDecisions.where(\decision -> decision != null and decision != UpdateDecision.NOT_REQUIRED)
      .fold(\ dec1, dec2 -> dec1 == dec2 ? dec1 : UpdateDecision.PARTIAL_ACCEPT )
  }

  function propagateDecision(item: T, isMaintenanceUpdate : boolean = false) {
    _isMaintenanceUpdate = isMaintenanceUpdate
    propagateDecisionDown(item)
    propagateDecisionUp(item)
  }

  private function propagateDecisionDown(item : T) {
    childrenOf(item)?.each( \ c -> {
      if (decisionRequired(c, _isMaintenanceUpdate)) {
        decisionOf(c).Decision = decisionOf(item).Decision
      }
      propagateDecisionDown(c)
    })
  }

  private function propagateDecisionUp(item : T) {
    var parent = parentOf(item)
    if (parent != null) {
      decisionOf(parent).Decision =
        aggregateDecision(childrenOf(parent)
          .where( \ child -> decisionRequired(child, _isMaintenanceUpdate))
          .map( \ c -> decisionOf(c).Decision))
      propagateDecisionUp(parent)
    }
  }

  abstract function decisionOf(item : T) : DecisionAndInstructions

  abstract function childrenOf(item : T) : List<T>

  abstract function parentOf(item : T) : T

  abstract function decisionRequired(item: T, isMaintenanceUpdate : boolean = false) : boolean

}
