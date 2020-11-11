package gw.sbt.pca.view.presenter.compare

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.clause.ClauseAttribute
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.pca.view.DecisionHandler

uses java.util.List

abstract class StateUpdateComparisonPresenter {
  var _children: List<StateUpdateComparisonPresenter> as readonly Children
  var _decisionHandler : DecisionHandler as DecisionHandler
  var _readOnly: boolean
  protected static var _isMaintenanceUpdate : boolean = false

  construct(children: List<StateUpdateComparisonPresenter>, decisionHandler : DecisionHandler, isMaintenanceUpdate : boolean = false) {
    _children = children ?: {}
    _decisionHandler = decisionHandler
    _isMaintenanceUpdate = isMaintenanceUpdate
  }

  abstract property get Description(): String

  abstract property get CurrentValue() : String

  abstract property get NewValue() : String

  abstract property get AdoptedValue() : String

  abstract property get IsDecisionRequired() : boolean

  property get DecisionAndInstructions(): DecisionAndInstructions {
    return null
  }

  property get Decision(): UpdateDecision {
    return DecisionAndInstructions?.Decision
  }

  property set Decision(updateDecision: UpdateDecision) {
  }

  property get DecisionLabel() : String {
    return gw.sbt.util.DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(Decision)
  }

  property get Selectable(): boolean {
    return IsDecisionRequired
  }

  reified protected static function createAttributePresenters<T>(
      attributeComparisons : List<Comparison<ClauseAttribute>>,
      decisionHandler : DecisionHandler,
      builderBlock(builder : AttributePresentersBuilder<T>)) : List<AttributeComparisonPresenter> {
    var builder = new AttributePresentersBuilder<T>(attributeComparisons, decisionHandler)
    builderBlock(builder)
    return builder._presenters
  }


  protected static class AttributePresentersBuilder<T> {
    var _attributeComparisons : List<Comparison<ClauseAttribute>>
    var _decisionHandler : DecisionHandler
    protected var _presenters : List<AttributeComparisonPresenter> = {}

    construct(attributeComparisons : List<Comparison<ClauseAttribute>>, decisionHandler : DecisionHandler) {
      _attributeComparisons = attributeComparisons
      _decisionHandler = decisionHandler
    }

    function attribute(name : String, label : String) {
      var attributeComparison = _attributeComparisons.firstWhere(\ attribute -> attribute.CanonicalVersion.Name == name)
      if (attributeComparison != null)
        _presenters.add(new AttributeComparisonPresenter(label, attributeComparison, _decisionHandler, _isMaintenanceUpdate))
    }
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

  property get AvailabilityColor(): String {
    return ""
  }
}