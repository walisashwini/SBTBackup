package gw.sbt.pca.view.presenter.compare

uses gw.api.locale.DisplayKey
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.SystemTableKeyValueId
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.comparisons.BureauCodesComparison
uses gw.sbt.pca.view.DecisionHandler

class StateUpdateBureauCodesComparisonPresenter extends StateUpdateComparisonPresenter {
  var _comparison : BureauCodesComparison
  var _originalComparison : BureauCodesComparison
  var _newSBTEdition : String as NewSBTEdition
  var _adoptedSBTEdition : String as AdoptedSBTEdition

  var _keyColumnNames: List<String> as KeyColumnNames = {}
  var _valueColumnLabel: String as ValueColumnLabel

  construct(bureauCodesComparison : BureauCodesComparison, keyColumnNames : List<String>, newSBTEdition : String, adoptedSBTEdition : String, decisionHandler : DecisionHandler,
            isMaintenanceUpdate : boolean = false) {
    super(createRowComparisonPresenters(bureauCodesComparison, keyColumnNames, decisionHandler), decisionHandler, isMaintenanceUpdate)
    _originalComparison = bureauCodesComparison.cloneForRevert()
    _comparison = bureauCodesComparison
    _newSBTEdition = newSBTEdition
    _adoptedSBTEdition = adoptedSBTEdition
    _keyColumnNames = keyColumnNames

    //Could be Value, MinValue/MaxValue, "" or Code for DBTerriroty
    _valueColumnLabel = SystemTableKeyValueId.VALUE_COLUMN_NAME
    var firstRow = _comparison.Children.first()
    if (firstRow != null) {
      _valueColumnLabel = firstRow.CanonicalVersion.Codes.first()?.Value.Name
    }
    _valueColumnLabel = _valueColumnLabel?:SystemTableKeyValueId.VALUE_COLUMN_NAME
  }

  private static function createRowComparisonPresenters(comparison : BureauCodesComparison, keyColumnNames: List<String>, decisionHandler : DecisionHandler) : List<StateUpdateBureauCodeRowComparisonPresenter> {
    var rowPresenters : List<StateUpdateBureauCodeRowComparisonPresenter> = {}
    comparison.Children.each(\bureauCodeRowComparison -> {
      rowPresenters.add(new StateUpdateBureauCodeRowComparisonPresenter(bureauCodeRowComparison, keyColumnNames, decisionHandler, _isMaintenanceUpdate))
    })
    return rowPresenters
  }

  override property get Children() : List<StateUpdateBureauCodeRowComparisonPresenter> {
    return super.Children.cast(StateUpdateBureauCodeRowComparisonPresenter)
  }

  override property set Decision(updateDecision : UpdateDecision) {
    if (DecisionAndInstructions != null) {
      DecisionAndInstructions.Decision = updateDecision
    }

    DecisionHandler?.propagateDecision(_comparison, _isMaintenanceUpdate) // pass in comparison object for ComparisonDecisionHandler
  }

  override property get Description() : String {
    return _comparison.CanonicalVersion.Label
  }

  override property get CurrentValue() : String {
    return null
  }

  override property get NewValue() : String {
    return null
  }

  override property get AdoptedValue() : String {
    return null
  }

  override property get IsDecisionRequired() : boolean {
    return false
  }

  override property get DecisionAndInstructions() : DecisionAndInstructions {
    return _comparison.DecisionAndInstructions
  }

  property get DiffTitle() : String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.RateTable.DiffBetweenCurrentAndNew")
  }

  property get CurrentTitle() : String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.BureauCode.CurrentValue", ValueColumnLabel)
  }

  property get NewTitle() : String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.BureauCode.NewValue", ValueColumnLabel)
  }

  property get AdoptedTitle() : String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.BureauCode.AdoptedValue", ValueColumnLabel)
  }

  property get DecisionTitle() : String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.DecisionLabel")
  }

  function revertChanges() {
    _comparison.copyDecisionsAndInstructionsFrom(_originalComparison)
  }

  property get HasValueColumn() : boolean {
    return _comparison.CanonicalVersion.HasValueColumnDefined
  }

}

