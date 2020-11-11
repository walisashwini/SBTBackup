package gw.lob.gl7.rating

uses entity.windowed.GL7SublineExclCostVersionList
uses gw.financials.PolicyPeriodFXRateCache
uses gw.pl.persistence.core.effdate.EffDatedVersionList
uses gw.rating.worksheet.domain.WorksheetEntry

uses java.util.Date
uses gw.lang.reflect.interval.DateInterval
uses gw.api.domain.Clause

class GL7SublineExclCostData extends GL7CostData<GL7SublineExclCost> {
  var _exclusion : Exclusion as readonly SublineExcl

  construct(dateInterval : DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval.LeftEndpoint, dateInterval.RightEndpoint, clause.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _exclusion = clause as Exclusion
  }

  construct(effDate : Date, expDate : Date) {
    super(effDate, expDate)
  }

  construct(cost : GL7SublineExclCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
    _exclusion = cost.SublineExclusion
  }

  construct(effDate : Date, expDate : Date, excl: Exclusion, rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, excl.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _exclusion = excl
  }

  construct(effDate : Date, expDate : Date, c : Currency, rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, c, rateCache)
  }

  construct(cost : GL7SublineExclCost) {
    super(cost)
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var gl7CostVLs = line.VersionList.GL7Costs
    return gl7CostVLs.whereTypeIs(GL7SublineExclCostVersionList).where( \ g -> isMyCost(g.AllVersions.first()) ).toList()
  }

  private function isMyCost(cost : GL7SublineExclCost) : boolean {
    return SublineExcl.FixedId == cost.SublineExclusion.FixedId
  }

  override property get WorksheetEntries(): List<WorksheetEntry> {
    return null
  }

  override function setSpecificFieldsOnCost(line : GL7Line, costEntity: GL7SublineExclCost) {
    super.setSpecificFieldsOnCost(line, costEntity)
    costEntity.setFieldValue("SublineExclusion", SublineExcl.FixedId)
  }

  protected override property get KeyValues() : List<Object> {
    var result : List<Object> = {SublineExcl}
    result.addAll(super.KeyValues)
    return result
  }
}