package gw.sbt.model.comparisons

uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.model.rating.FactorRow
uses gw.sbt.util.Serializer

class FactorRowComparison extends Comparison<FactorRow> {
  var _parameterValuesKey: String as ParameterValuesKey
  construct(currentVersion : FactorRow, newVersion : FactorRow, adoptedVersion : FactorRow,
            comparisonDecisionSource : ComparisonDecisionSource,
            parent : Comparison) {
    super(currentVersion, newVersion, adoptedVersion, comparisonDecisionSource, parent)
    _parameterValuesKey = (newVersion?:adoptedVersion?:currentVersion).ParameterValuesKey
  }

  override property get Children(): List<Comparison> {
    return {}
  }

  override function cloneForRevert() : FactorRowComparison {
    return new FactorRowComparison(Serializer.makeCopy(Current),
        Serializer.makeCopy(New),
        Serializer.makeCopy(Adopted),
        Serializer.makeCopy(_comparisonDecisionSource), null)
  }
}