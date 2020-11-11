package gw.sbt.model.comparisons

uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.model.Risk
uses gw.sbt.model.RiskAttribute

class RiskComparison extends Comparison<Risk> {
  var _riskAttributeRowComparisons : List<RiskAttributeComparison> as readonly RiskAttributeComparisons

  construct(currentVersion : Risk, newVersion : Risk, adoptedVersion : Risk,
            comparisonDecisionSource : ComparisonDecisionSource,
            isIndependentState : boolean,
            parent : Comparison) {
    super(currentVersion, newVersion, adoptedVersion, comparisonDecisionSource, parent)
    //filter out risk attribute only exists in current
    var attributeCodesInAdopted = adoptedVersion.RiskAttributes*.Code
    var attributeCodesInNew = newVersion.RiskAttributes*.Code

    currentVersion.RiskAttributes?.retainWhere(\riskAttribute -> attributeCodesInNew?.contains(riskAttribute.Code) or attributeCodesInAdopted?.contains(riskAttribute.Code) or isIndependentState)

    _riskAttributeRowComparisons = createRiskAttributesComparisons()
  }

  override property get Children(): List<RiskAttributeComparison> {
    return RiskAttributeComparisons
  }

  override function cloneForRevert() : Comparison<Risk> {
    return null
  }

  private function createRiskAttributesComparisons(): List<RiskAttributeComparison> {
    var factory =  new PluggableChildComparisonFactory<Risk, RiskAttribute>(
        \ risk -> risk.RiskAttributes?.toList(),
        \ riskAttribute -> riskAttribute.Code,
        \ currentRiskAttribute, newRiskAttribute, adoptedRiskAttribute ->
            Comparison.forRiskAttribute(currentRiskAttribute, newRiskAttribute, adoptedRiskAttribute, _comparisonDecisionSource, this))
    return factory.createChildComparisonsFor(this).cast(RiskAttributeComparison)
  }
}