package gw.lob.common.util

uses java.math.BigDecimal

enhancement LOBRateFactorEnhancement : RateFactor
{
  /*
    ISO: Rate factors can only be whole numbers.
    Because of that we present rate factor value to user as integer
   */
  property get AssessmentWithinLimitsDisplay(): int {
    return this.AssessmentWithinLimits.intValue()
  }

  property set AssessmentWithinLimitsDisplay(assessment: int)  {
    this.AssessmentWithinLimits = BigDecimal.valueOf(assessment)
  }
}
