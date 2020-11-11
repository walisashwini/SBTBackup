package gw.lob.common.util.modifiers

uses gw.lob.common.dependency.v2.ValueDependencySupport

/**
 * Default rate factor values range provider.
 * It gets the range from the value dependency framework
 */
class DefaultRateFactorProvider implements RateFactorRangeGenerator {
  override function getRangeForRateFactor(rateFactor: RateFactor): List<Integer> {
    return ValueDependencySupport.Instance.valueRange(rateFactor).map(\ str -> str.remove("%").toInt())
  }
}