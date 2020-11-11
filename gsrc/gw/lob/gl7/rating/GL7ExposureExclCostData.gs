package gw.lob.gl7.rating

uses entity.windowed.GL7ExposureExclCostVersionList
uses gw.api.domain.Clause
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList
uses gw.rating.CoverableWithRatingBasisType
uses gw.rating.worksheet.domain.WorksheetEntry

uses java.util.Date

class GL7ExposureExclCostData extends GL7CostData<GL7ExposureExclCost> {
  var _exclusion : Exclusion as readonly ExposureExcl
  var _basisScalable: Boolean = false

  construct(dateInterval : DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache, basisScalable: Boolean) {
    super(dateInterval.LeftEndpoint, dateInterval.RightEndpoint, clause.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _exclusion = clause as Exclusion
    _basisScalable = basisScalable
  }

  construct(effDate : Date, expDate : Date, basisScalable: Boolean) {
    super(effDate, expDate)
    _basisScalable = basisScalable
  }

  construct(cost : GL7ExposureExclCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
    _exclusion = cost.ExposureExclusion
    _basisScalable = cost.OwningCoverable typeis CoverableWithRatingBasisType ? cost.OwningCoverable.IsBasisScalable : false
  }

  construct(effDate : Date, expDate : Date, excl: Exclusion, rateCache : PolicyPeriodFXRateCache, basisScalable: Boolean) {
    super(effDate, expDate, excl.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _exclusion = excl
    _basisScalable = basisScalable
  }

  construct(effDate : Date, expDate : Date, c : Currency, rateCache : PolicyPeriodFXRateCache, basisScalable: Boolean) {
    super(effDate, expDate, c, rateCache)
    _basisScalable = basisScalable
  }

  construct(cost : GL7ExposureExclCost) {
    super(cost)
    _basisScalable = cost.OwningCoverable typeis CoverableWithRatingBasisType ? cost.OwningCoverable.IsBasisScalable : false
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var gl7CostVLs = line.VersionList.GL7Costs
    return gl7CostVLs.whereTypeIs(GL7ExposureExclCostVersionList).where( \ g -> isMyCost(g.AllVersions.first()) ).toList()
  }

  private function isMyCost(cost : GL7ExposureExclCost) : boolean {
    return ExposureExcl.FixedId == cost.ExposureExclusion.FixedId
  }

  override property get WorksheetEntries(): List<WorksheetEntry> {
    return null
  }

  override function setSpecificFieldsOnCost(line : GL7Line, costEntity: GL7ExposureExclCost) {
    super.setSpecificFieldsOnCost(line, costEntity)
    costEntity.setFieldValue("ExposureExclusion", ExposureExcl.FixedId)
  }

  protected override property get KeyValues() : List<Object> {
    var result : List<Object> = {ExposureExcl}
    result.addAll(super.KeyValues)
    return result
  }

  override property get MergeAsBasisScalable() : boolean {
    return _basisScalable
  }
}