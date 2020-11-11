package gw.rating

uses java.util.Date
uses gw.api.util.DateUtil

abstract class AbstractCoverableWithRatingBasisType<T extends Coverable, S extends RatingBasisTypeProvider> implements CoverableWithRatingBasisType {

  abstract property get OwningCoverable(): T

  abstract property get BasisTypeFromCoverable(): String

  abstract property get RatingBasisTypeProvider(): S

  override property get RatingBasisType(): RatingBasisType {
    return RatingBasisTypeProvider.getRatingBasisType(BasisTypeFromCoverable, (OwningCoverable.BranchUntyped as PolicyPeriod).PeriodStart)
  }

  override property get EndOfCoverageDate(): Date {
    var cancellationDate = (OwningCoverable.BranchUntyped as PolicyPeriod).CancellationDate
    var expirationDate = OwningCoverable.LatestExpirationDate
    return cancellationDate != null and DateUtil.compareIgnoreTime(cancellationDate, expirationDate) < 0
        ? cancellationDate
        : expirationDate
  }

  override property get IsBasisScalable(): Boolean {
    return this.RatingBasisType == TC_VARIABLE
  }

}