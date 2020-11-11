package gw.lob.common.util.modifiers

/**
 * Basic rate factor values range generator.
 * Generate range of integer values from minimum to maximum rate factor value
 * Possible to pass filter to filter out some values
 */
class RateFactorFilteredRangeGenerator implements RateFactorRangeGenerator {
  private final var _filter : block(rateFactor : RateFactor, range : List<Integer>) : List<Integer>

  construct(filter : block(rateFactor : RateFactor, range : List<Integer>) : List<Integer> = null) {
    _filter = filter
  }

  override function getRangeForRateFactor(rateFactor : RateFactor) : List<Integer> {
    var range : List<Integer> = {}

    for (value in rateFactor.Minimum.intValue()..rateFactor.Maximum.intValue()) {
      range.add(value)
    }
    if (_filter != null) {
      range = _filter(rateFactor, range)
    }

    return range
  }
}