package gw.lob.gl7.rating

uses entity.windowed.GL7ExposureCondCostVersionList
uses gw.api.domain.Clause
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList
uses gw.rating.CoverableWithRatingBasisType
uses gw.rating.worksheet.domain.WorksheetEntry

uses java.util.Date

class GL7ExposureCondCostData extends GL7CostData<GL7ExposureCondCost> {
  var _condition : PolicyCondition as readonly ExposureCond
  var _basisScalable: Boolean = false

  construct(dateInterval : DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache, basisScalable: Boolean) {
    super(dateInterval.LeftEndpoint, dateInterval.RightEndpoint, clause.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _condition = clause as PolicyCondition
    _basisScalable = basisScalable
  }

  construct(effDate : Date, expDate : Date, basisScalable: Boolean) {
    super(effDate, expDate)
    _basisScalable = basisScalable
  }

  construct(cost : GL7ExposureCondCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
    _condition = cost.ExposureCondition
    _basisScalable = cost.OwningCoverable typeis CoverableWithRatingBasisType ? cost.OwningCoverable.IsBasisScalable : false
  }

  construct(effDate : Date, expDate : Date, cond : PolicyCondition, rateCache : PolicyPeriodFXRateCache, basisScalable: Boolean) {
    super(effDate, expDate, cond.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _condition = cond
    _basisScalable = basisScalable
  }

  construct(effDate : Date, expDate : Date, c : Currency, rateCache : PolicyPeriodFXRateCache, basisScalable: Boolean) {
    super(effDate, expDate, c, rateCache)
    _basisScalable = basisScalable
  }

  construct(cost : GL7ExposureCondCost) {
    super(cost)
    _basisScalable = cost.OwningCoverable typeis CoverableWithRatingBasisType ? cost.OwningCoverable.IsBasisScalable : false
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var gl7CostVLs = line.VersionList.GL7Costs
    return gl7CostVLs.whereTypeIs(GL7ExposureCondCostVersionList).where( \ g -> isMyCost(g.AllVersions.first()) ).toList()
  }

  private function isMyCost(cost : GL7ExposureCondCost) : boolean {
    return ExposureCond.FixedId == cost.ExposureCondition.FixedId
  }

  override property get WorksheetEntries(): List<WorksheetEntry> {
    return null
  }

  override function setSpecificFieldsOnCost(line : GL7Line, costEntity: GL7ExposureCondCost) {
    super.setSpecificFieldsOnCost(line, costEntity)
    costEntity.setFieldValue("ExposureCondition", ExposureCond.FixedId)
  }

  protected override property get KeyValues() : List<Object> {
    var result : List<Object> = {ExposureCond}
    result.addAll(super.KeyValues)
    return result
  }

  override property get MergeAsBasisScalable(): boolean {
    return _basisScalable
  }
}