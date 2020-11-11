package gw.lob.gl7.rating

uses entity.windowed.GL7ExposureCovCostVersionList
uses gw.api.domain.Clause
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList
uses gw.rating.worksheet.domain.WorksheetEntry
uses gw.rating.CoverableWithRatingBasisType

uses java.util.Date


class GL7ExposureCovCostData extends GL7CostData<GL7ExposureCovCost> {
  var _coverage : Coverage as readonly ExposureCov
  var _basisScalable: Boolean = false

  construct(dateInterval : DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache, basisScalable: Boolean) {
    super(dateInterval.LeftEndpoint, dateInterval.RightEndpoint, clause.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _coverage = clause as Coverage
    _basisScalable = basisScalable
  }

  construct(effDate : Date, expDate : Date, basisScalable: Boolean) {
    super(effDate, expDate)
    _basisScalable = basisScalable
  }

  construct(cost : GL7ExposureCovCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
    _coverage = cost.ExposureCoverage
    _basisScalable = cost.OwningCoverable typeis CoverableWithRatingBasisType ? cost.OwningCoverable.IsBasisScalable : false
  }

  construct(effDate : Date, expDate : Date, cov : Coverage, rateCache : PolicyPeriodFXRateCache, basisScalable: Boolean) {
    super(effDate, expDate, cov.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _coverage = cov
    _basisScalable = basisScalable
  }

  construct(effDate : Date, expDate : Date, c : Currency, rateCache : PolicyPeriodFXRateCache, basisScalable: Boolean) {
    super(effDate, expDate, c, rateCache)
    _basisScalable = basisScalable
  }

  construct(cost : GL7ExposureCovCost) {
    super(cost)
    _basisScalable = cost.OwningCoverable typeis CoverableWithRatingBasisType ? cost.OwningCoverable.IsBasisScalable : false
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var gl7CostVLs = line.VersionList.GL7Costs
    return gl7CostVLs.whereTypeIs(GL7ExposureCovCostVersionList).where( \ g -> isMyCost(g.AllVersions.first()) ).toList()
  }

  private function isMyCost(cost : GL7ExposureCovCost) : boolean {
    return ExposureCov.FixedId == cost.ExposureCoverage.FixedId
  }

  override property get WorksheetEntries(): List<WorksheetEntry> {
    return null
  }

  override function setSpecificFieldsOnCost(line : GL7Line, costEntity: GL7ExposureCovCost) {
    super.setSpecificFieldsOnCost(line, costEntity)
    costEntity.setFieldValue("ExposureCoverage", ExposureCov.FixedId)
  }

  protected override property get KeyValues() : List<Object> {
    var result : List<Object> = {ExposureCov}
    result.addAll(super.KeyValues)
    return result
  }

  override property get MergeAsBasisScalable(): boolean {
    return _basisScalable
  }

}