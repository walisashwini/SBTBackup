package gw.sbt.model.comparisons

uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.model.rating.FactorRow
uses gw.sbt.model.rating.RateTableContent
uses gw.sbt.pca.view.DecisionRequiredStrategy
uses gw.sbt.util.Serializer

class RateTableComparison extends Comparison<RateTableContent> {
  var _factorRowComparisons : List<FactorRowComparison> as readonly FactorRowComparisons

  construct(currentVersion : RateTableContent, newVersion : RateTableContent, adoptedVersion : RateTableContent,
            comparisonDecisionSource : ComparisonDecisionSource,
            parent : Comparison) {
    super(currentVersion, newVersion, adoptedVersion, comparisonDecisionSource, parent)
    _factorRowComparisons = createFactorRowComparisons()
  }

  override property get Children(): List<FactorRowComparison> {
    var children = new ArrayList<FactorRowComparison>()
    children.addAll(FactorRowComparisons)
    return children
  }

  private function createFactorRowComparisons(): List<FactorRowComparison> {
    var factory =  new PluggableChildComparisonFactory<RateTableContent, FactorRow>(
        \ rateTable -> rateTable.FactorRows,
        \ factorRow -> factorRow.ParameterValuesKey,
        \ currentFactorRow, newFactorRow, adoptedFactorRow ->
            new FactorRowComparison(currentFactorRow, newFactorRow, adoptedFactorRow, _comparisonDecisionSource, this))
    return factory.createChildComparisonsFor(this).cast(FactorRowComparison)
  }

  function copyDecisionsAndInstructionsFrom(templateComparison: RateTableComparison) {
    DecisionAndInstructions.updateFrom(templateComparison.DecisionAndInstructions)
    FactorRowComparisons.each(\factorRowComparison -> {
      var templateFactorRow = templateComparison.FactorRowComparisons.firstWhere(\templateFactorRowComparison -> templateFactorRowComparison.ParameterValuesKey == factorRowComparison.ParameterValuesKey)
      if (templateFactorRow != null) {
        factorRowComparison.copyDecisionsAndInstructionsFrom(templateFactorRow)
      }
    })

    New.DecisionAndInstructions?.updateFrom(templateComparison.New.DecisionAndInstructions)
    Adopted.DecisionAndInstructions?.updateFrom(templateComparison.Adopted.DecisionAndInstructions)
    Current.DecisionAndInstructions?.updateFrom(templateComparison.Current.DecisionAndInstructions)
  }

  // for better performance, only clone the decisionAndInstructions, and 'decisionRequired' factorRowComparisons
  override function cloneForRevert(): RateTableComparison {
    var clonedCurrent = new RateTableContent() {
      :DecisionAndInstructions = Serializer.makeCopy(Current.DecisionAndInstructions)
    }
    var clonedNew = new RateTableContent() {
      :DecisionAndInstructions = Serializer.makeCopy(New.DecisionAndInstructions)
    }
    var clonedAdopted = new RateTableContent() {
      :DecisionAndInstructions = Serializer.makeCopy(Adopted.DecisionAndInstructions)
    }
    var clonedDecisionSource = Serializer.makeCopy(_comparisonDecisionSource)
    var clonedRateTableComparison = new RateTableComparison(clonedCurrent, clonedNew, clonedAdopted, clonedDecisionSource, null)
    clonedRateTableComparison.DecisionAndInstructions = Serializer.makeCopy(this.DecisionAndInstructions)

    FactorRowComparisons.where(\factorRowComparison -> new DecisionRequiredStrategy().isDecisionRequiredFor(factorRowComparison)).each(\factorRowComparison -> {
      clonedRateTableComparison.FactorRowComparisons.add(factorRowComparison.cloneForRevert())
    })
    return clonedRateTableComparison
  }

}