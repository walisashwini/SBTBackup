package gw.lob.gl7.financials.schedules

class GL7SublnSchedCovItemCovCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnSchedCovItemCovCost, GL7SublineSchedCovItem, GL7SublnSchedCovItmCov> {
  construct(owner: GL7SublnSchedCovItemCovCost) {
    super(owner, owner.SublnSchedCovItem, owner.SublnSchedCovItemCov)
  }
}