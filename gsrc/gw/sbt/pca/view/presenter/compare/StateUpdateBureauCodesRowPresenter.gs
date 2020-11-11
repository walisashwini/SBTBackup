package gw.sbt.pca.view.presenter.compare

uses gw.sbt.loader.SystemTableHelper
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.comparisons.BureauCodesComparison
uses gw.sbt.model.comparisons.TwoWayCompare
uses gw.sbt.pca.view.ComparisonDecisionHandler
uses gw.sbt.pca.view.DecisionHandler
uses gw.sbt.pca.view.DecisionRequiredStrategy
uses pcf.StateUpdateBureauCodesPopup

class StateUpdateBureauCodesRowPresenter extends UpdatesComparisonRowPresenter {
  var _bureauCodeRowComparison : BureauCodesComparison as BureauCodesComparison

  construct(bureauCodeRowComparison : BureauCodesComparison,
            newSBTEdition: String, adoptedSBTEdition: String, decisionHandler : DecisionHandler,
            newCWEdition : String = null, adoptedCWEdition : String = null) {
    super(bureauCodeRowComparison, newSBTEdition, adoptedSBTEdition, newCWEdition, adoptedCWEdition, decisionHandler)
    _bureauCodeRowComparison = bureauCodeRowComparison
  }

  override property get Description(): String {
    return _bureauCodeRowComparison.CanonicalVersion.Label
  }

  override property get TwoWayCompareStrategy() : TwoWayCompare {
    return _bureauCodeRowComparison.CompareAdoptedToNew
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _bureauCodeRowComparison.DecisionAndInstructions
  }

  override property get Visible() : boolean {
    if (_isMaintenanceUpdate) {
      return BureauCodesComparison.CanonicalVersion.IsBureauCode and DiffType != UpdateDiffType.TC_NOCHANGE
    }

    var decisionRequired = getDiffType(_bureauCodeRowComparison.CompareCurrentToNew) != UpdateDiffType.TC_NOCHANGE
    return BureauCodesComparison.CanonicalVersion.IsBureauCode and decisionRequired
  }

  override property get Selectable(): boolean {
    return new DecisionRequiredStrategy().isDecisionRequiredFor(_bureauCodeRowComparison)
  }

  override function showDetails() {
    var presenter = ComparisonPresenter
    presenter.ReadOnly = ReadOnly
    StateUpdateBureauCodesPopup.push(presenter, NewSBTEdition, AdoptedSBTEdition)
  }

  property get ComparisonPresenter() : StateUpdateBureauCodesComparisonPresenter {
    var keyColumnNames = getKeyColumnNames()
    return new StateUpdateBureauCodesComparisonPresenter(_bureauCodeRowComparison, keyColumnNames, NewSBTEdition, AdoptedSBTEdition,
        new ComparisonDecisionHandler(new DecisionRequiredStrategy()), _isMaintenanceUpdate)
  }

  //union of key columns from Current/New/Adopted
  //most bureaucode/system table should have exactly same key column(s).
  private function getKeyColumnNames() : List<String> {
    var keyColumnNamesSet : Set<String> = {}
    var sampleCurrentRow = _bureauCodeRowComparison.Children.firstWhere(\row -> row.Current != null)
    var sampleAdoptedRow = _bureauCodeRowComparison.Children.firstWhere(\row -> row.Adopted != null)
    var sampleNewRow = _bureauCodeRowComparison.Children.firstWhere(\row -> row.New != null)
    keyColumnNamesSet.addAll(sampleCurrentRow != null ? sampleCurrentRow.Current.DefiningKeys*.Name.toList() : {})
    keyColumnNamesSet.addAll(sampleAdoptedRow != null ? sampleAdoptedRow.Adopted.DefiningKeys*.Name.toList() : {})
    keyColumnNamesSet.addAll(sampleNewRow != null ? sampleNewRow.New.DefiningKeys*.Name.toList() : {})

    //Ignore a list of columns from the presenter,
    keyColumnNamesSet.removeAll(SystemTableHelper.IGNORED_PRESENTER_COLUMNS)

    return keyColumnNamesSet.toList().order() // order asc
  }
}