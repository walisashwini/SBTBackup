package gw.sbt.model.comparisons

uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.model.RiskAttribute
uses gw.sbt.model.RiskAttributeProperty
uses gw.sbt.util.Serializer

class RiskAttributeComparison extends Comparison<RiskAttribute> {
  var _riskAttributePropertyComparisons : List<Comparison<RiskAttributeProperty>> as readonly RiskAttributePropertyComparisons

  construct(currentVersion : RiskAttribute, newVersion : RiskAttribute, adoptedVersion : RiskAttribute,
            comparisonDeicsionSource : ComparisonDecisionSource,
            parent : Comparison) {
    super(currentVersion, newVersion, adoptedVersion, comparisonDeicsionSource, parent)
    _riskAttributePropertyComparisons = createRiskAttributePropertyComparisons()
  }

  private function createRiskAttributePropertyComparisons(): List<Comparison<RiskAttributeProperty>> {
    var factory =  new PluggableChildComparisonFactory<RiskAttribute, RiskAttributeProperty>(
        \ riskAttribute -> riskAttribute.EffectiveVersion.PropertyList,
        \ riskAttributeProperty -> riskAttributeProperty.PropName,
        \ currentRiskAttributeProperty, newRiskAttributeProperty, adoptedRiskAttributeProperty ->
            BasicComparison.with(currentRiskAttributeProperty, newRiskAttributeProperty, adoptedRiskAttributeProperty, _comparisonDecisionSource, this))
    return factory.createChildComparisonsFor(this)
  }

  override property get Children(): List<Comparison> {
    return {}
  }

  override function cloneForRevert() : RiskAttributeComparison {
    var clonedComparison = RiskAttributeComparison.forRiskAttribute(
        Serializer.makeCopy(Current),
        Serializer.makeCopy(New),
        Serializer.makeCopy(Adopted), Serializer.makeCopy(_comparisonDecisionSource))
    clonedComparison.DecisionAndInstructions = Serializer.makeCopy(this.DecisionAndInstructions)
    return clonedComparison
  }
}