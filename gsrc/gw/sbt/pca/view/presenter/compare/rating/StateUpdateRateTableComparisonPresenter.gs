package gw.sbt.pca.view.presenter.compare.rating

uses gw.api.locale.DisplayKey
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.comparisons.RateTableComparison
uses gw.sbt.model.rating.FactorRow
uses gw.sbt.pca.view.DecisionHandler
uses gw.sbt.pca.view.presenter.compare.StateUpdateComparisonPresenter
uses gw.sbt.util.Formatter

class StateUpdateRateTableComparisonPresenter extends StateUpdateComparisonPresenter {
  var _comparison : RateTableComparison
  var _originalComparison: RateTableComparison

  construct(comparison : RateTableComparison, decisionHandler : DecisionHandler, skipClone: boolean = false, isMaintenanceUpdate : boolean = false) {
    super(createFactorRowComparisonPresenters(comparison, decisionHandler, isMaintenanceUpdate), decisionHandler, isMaintenanceUpdate)
    if (not skipClone) {
      _originalComparison = comparison.cloneForRevert()
    }
    _comparison = comparison
  }

  private static function createFactorRowComparisonPresenters(comparison : RateTableComparison, decisionHandler : DecisionHandler,
                                                              isMaintenanceUpdate : boolean) : List<StateUpdateRateTableFactorRowComparisonPresenter> {
    var factorRowPresenters : List<StateUpdateRateTableFactorRowComparisonPresenter> = {}
    comparison.Children.each(\factorRowComparison -> {
      if(factorRowComparison typeis Comparison<FactorRow>) {
        factorRowPresenters.add(new StateUpdateRateTableFactorRowComparisonPresenter(factorRowComparison, decisionHandler, isMaintenanceUpdate))
      }
    })
    return factorRowPresenters
  }

  //explicitly downcast from StateUpdateComparisonPresenter to StateUpdateRateTableFactorRowComparisonPresenter
  override property get Children(): List<StateUpdateRateTableFactorRowComparisonPresenter> {
    return super.Children.cast(StateUpdateRateTableFactorRowComparisonPresenter)
  }

  override property set Decision(updateDecision: UpdateDecision) {
    if(DecisionAndInstructions != null) {
      DecisionAndInstructions.Decision = updateDecision
    }

    DecisionHandler?.propagateDecision(_comparison, _isMaintenanceUpdate) // pass in comparison object for ComparisonDecisionHandler
  }

  override property get Description() : String {
    return _comparison.CanonicalVersion.TableName
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
    return true
  }

  override property get DecisionAndInstructions() : DecisionAndInstructions {
    return _comparison.DecisionAndInstructions
  }

  property get Jurisdiction() : String {
    return IsStateTable
        ? _comparison.CanonicalVersion.OwningRateBook.Jurisdiction
        : DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateTable.CountryWideAbbreviation")
  }

  private property get IsStateTable() : boolean {
    return _comparison.CanonicalVersion.OwningRateBook.Jurisdiction.HasContent
  }

  property get NewConfig() : String {
    if(_comparison.New != null) {
      return Formatter.dateToString(_comparison.New.OwningRateBook.EffectiveDate)+" - "+ _comparison.New.OwningRateBook.Edition
    } else {
      return "-"
    }
  }

  property get CurrentConfig() : String {
    if(_comparison.Current != null) {
      return Formatter.dateToString(_comparison.Current.OwningRateBook.EffectiveDate)+" - "+ _comparison.Current.OwningRateBook.Edition
    } else {
      return "-"
    }
  }

  property get ParameterNames() : List<String> {
    return _comparison.CanonicalVersion.ParameterDefinitions*.ColumnName.toList()
  }

  property get FactorName(): String {
    return _comparison.CanonicalVersion.FactorName?: "DEFAULT! FACTOR NAME"
  }

  property get CurrentTitle() : String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.RateTable.Current.Title", FactorName)
  }

  property get NewTitle() : String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.RateTable.New.Title", FactorName)
  }

  property get DiffTitle() : String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.RateTable.DiffBetweenCurrentAndNew")
  }

  property get AdoptedTitle() : String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.RateTable.Adopted.Title", FactorName)
  }

  function revertChanges() {
    if (_originalComparison != null) {
      _comparison.copyDecisionsAndInstructionsFrom(_originalComparison)
    }
  }

}

