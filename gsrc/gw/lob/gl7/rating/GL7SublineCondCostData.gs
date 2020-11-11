package gw.lob.gl7.rating

uses entity.windowed.GL7SublineCondCostVersionList
uses gw.api.domain.Clause
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList
uses gw.rating.worksheet.domain.WorksheetEntry

uses java.util.Date

class GL7SublineCondCostData extends GL7CostData<GL7SublineCondCost> {
  var _condition: PolicyCondition as readonly SublineCond

  construct(dateInterval : DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval.LeftEndpoint, dateInterval.RightEndpoint, clause.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _condition = clause as PolicyCondition
  }

  construct(effDate : Date, expDate : Date) {
    super(effDate, expDate)
  }

  construct(cost : GL7SublineCondCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
    _condition = cost.SublineCondition
  }

  construct(effDate : Date, expDate : Date, cov : PolicyCondition, rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, cov.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _condition = cov
  }

  construct(effDate : Date, expDate : Date, c : Currency, rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, c, rateCache)
  }

  construct(cost : GL7SublineCondCost) {
    super(cost)
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var gl7CostVLs = line.VersionList.GL7Costs
    return gl7CostVLs.whereTypeIs(GL7SublineCondCostVersionList).where( \ g -> isMyCost(g.AllVersions.first()) ).toList()
  }

  private function isMyCost(cost : GL7SublineCondCost) : boolean {
    return SublineCond.FixedId == cost.SublineCondition.FixedId
  }

  override property get WorksheetEntries(): List<WorksheetEntry> {
    return null
  }

  override function setSpecificFieldsOnCost(line : GL7Line, costEntity: GL7SublineCondCost) {
    super.setSpecificFieldsOnCost(line, costEntity)
    costEntity.setFieldValue("SublineCondition", SublineCond.FixedId)
  }

  protected override property get KeyValues() : List<Object> {
    var result : List<Object> = {SublineCond}
    result.addAll(super.KeyValues)
    return result
  }
}