package gw.lob.gl7.financials.schedules

class GL7SublnTypSchCovItemCovCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnTypSchCovItemCovCost, GL7SublineTypeSchCovItem, GL7SublnTypSchCovItmCov> {
  construct(owner: GL7SublnTypSchCovItemCovCost) {
    super(owner, owner.SublnTypSchCovItem, owner.SublnTypSchCovItemCov)
  }
}