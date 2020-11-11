package gw.lob.gl7.rating

uses entity.windowed.GL7SublineTypeCondCostVersionList
uses gw.api.domain.Clause
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList
uses gw.rating.worksheet.domain.WorksheetEntry

uses java.util.Date

class GL7SublineTypeCondCostData extends GL7CostData<GL7SublineTypeCondCost> {
  var _condition : PolicyCondition as readonly SublineTypeCond

  construct(dateInterval : DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval.LeftEndpoint, dateInterval.RightEndpoint, clause.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _condition = clause as PolicyCondition
  }

  construct(effDate : Date, expDate : Date) {
    super(effDate, expDate)
  }

  construct(cost : GL7SublineTypeCondCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
    _condition = cost.SublineTypeCondition
  }

  construct(effDate : Date, expDate : Date, cond: PolicyCondition, rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, cond.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _condition = cond
  }

  construct(effDate : Date, expDate : Date, c : Currency, rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, c, rateCache)
  }

  construct(cost : GL7SublineTypeCondCost) {
    super(cost)
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var gl7CostVLs = line.VersionList.GL7Costs
    return gl7CostVLs.whereTypeIs(GL7SublineTypeCondCostVersionList).where( \ g -> isMyCost(g.AllVersions.first()) ).toList()
  }

  private function isMyCost(cost : GL7SublineTypeCondCost) : boolean {
    return SublineTypeCond.FixedId == cost.SublineTypeCondition.FixedId
  }

  override property get WorksheetEntries(): List<WorksheetEntry> {
    return null
  }

  override function setSpecificFieldsOnCost(line : GL7Line, costEntity: GL7SublineTypeCondCost) {
    super.setSpecificFieldsOnCost(line, costEntity)
    costEntity.setFieldValue("SublineTypeCondition", SublineTypeCond.FixedId)
  }

  protected override property get KeyValues() : List<Object> {
    var result : List<Object> = {SublineTypeCond}
    result.addAll(super.KeyValues)
    return result
  }
}