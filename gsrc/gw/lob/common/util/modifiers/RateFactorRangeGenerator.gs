package gw.lob.common.util.modifiers

interface RateFactorRangeGenerator {
  function getRangeForRateFactor(rateFactor : RateFactor) : List<Integer>
}