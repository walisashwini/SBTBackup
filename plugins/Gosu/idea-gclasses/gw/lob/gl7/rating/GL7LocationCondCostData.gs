package gw.lob.gl7.rating

uses entity.windowed.GL7LocationCondCostVersionList
uses gw.api.domain.Clause
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList
uses gw.rating.worksheet.domain.WorksheetEntry

uses java.util.Date

class GL7LocationCondCostData extends GL7CostData<GL7LocationCondCost> {
  var _condition: PolicyCondition as readonly LocationCond

  construct(dateInterval : DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval.LeftEndpoint, dateInterval.RightEndpoint, clause.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _condition = clause as PolicyCondition
  }

  construct(effDate : Date, expDate : Date) {
    super(effDate, expDate)
  }

  construct(cost : GL7LocationCondCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
    _condition = cost.LocationCondition
  }

  construct(effDate : Date, expDate : Date, cond : PolicyCondition, rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, cond.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _condition = cond
  }

  construct(effDate : Date, expDate : Date, c : Currency, rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, c, rateCache)
  }

  construct(cost : GL7LocationCondCost) {
    super(cost)
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var gl7CostVLs = line.VersionList.GL7Costs
    return gl7CostVLs.whereTypeIs(GL7LocationCondCostVersionList).where( \ g -> isMyCost(g.AllVersions.first()) ).toList()
  }

  private function isMyCost(cost : GL7LocationCondCost) : boolean {
    return LocationCond.FixedId == cost.LocationCondition.FixedId
  }

  override property get WorksheetEntries(): List<WorksheetEntry> {
    return null
  }

  override function setSpecificFieldsOnCost(line : GL7Line, costEntity: GL7LocationCondCost) {
    super.setSpecificFieldsOnCost(line, costEntity)
    costEntity.setFieldValue("LocationCondition", LocationCond.FixedId)
  }

  protected override property get KeyValues() : List<Object> {
    var result : List<Object> = {LocationCond}
    result.addAll(super.KeyValues)
    return result
  }
}