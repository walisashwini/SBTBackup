package gw.rating

uses java.util.Date

structure CoverableWithRatingBasisType {

  /**
   * Indicates if premium for this coverable should be calculated as basis scalable
   */
  property get RatingBasisType(): RatingBasisType

  property get IsBasisScalable(): Boolean

  property get EndOfCoverageDate(): Date
}