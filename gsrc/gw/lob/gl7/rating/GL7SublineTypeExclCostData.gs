package gw.lob.gl7.rating

uses entity.windowed.GL7SublineTypeExclCostVersionList
uses gw.api.domain.Clause
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList
uses gw.rating.worksheet.domain.WorksheetEntry

uses java.util.Date

class GL7SublineTypeExclCostData extends GL7CostData<GL7SublineTypeExclCost> {
  var _exclusion : Exclusion as readonly SublineTypeExcl

  construct(dateInterval : DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval.LeftEndpoint, dateInterval.RightEndpoint, clause.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _exclusion = clause as Exclusion
  }

  construct(effDate : Date, expDate : Date) {
    super(effDate, expDate)
  }

  construct(cost : GL7SublineTypeExclCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
    _exclusion = cost.SublineTypeExclusion
  }

  construct(effDate : Date, expDate : Date, excl : Exclusion, rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, excl.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _exclusion = excl
  }

  construct(effDate : Date, expDate : Date, c : Currency, rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, c, rateCache)
  }

  construct(cost : GL7SublineTypeExclCost) {
    super(cost)
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var gl7CostVLs = line.VersionList.GL7Costs
    return gl7CostVLs.whereTypeIs(GL7SublineTypeExclCostVersionList).where( \ g -> isMyCost(g.AllVersions.first()) ).toList()
  }

  private function isMyCost(cost : GL7SublineTypeExclCost) : boolean {
    return SublineTypeExcl.FixedId == cost.SublineTypeExclusion.FixedId
  }

  override property get WorksheetEntries(): List<WorksheetEntry> {
    return null
  }

  override function setSpecificFieldsOnCost(line : GL7Line, costEntity: GL7SublineTypeExclCost) {
    super.setSpecificFieldsOnCost(line, costEntity)
    costEntity.setFieldValue("SublineTypeExclusion", SublineTypeExcl.FixedId)
  }

  protected override property get KeyValues() : List<Object> {
    var result : List<Object> = {SublineTypeExcl}
    result.addAll(super.KeyValues)
    return result
  }
}