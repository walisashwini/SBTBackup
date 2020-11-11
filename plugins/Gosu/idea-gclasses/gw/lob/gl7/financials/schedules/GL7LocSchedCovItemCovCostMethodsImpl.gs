package gw.lob.gl7.financials.schedules

class GL7LocSchedCovItemCovCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7LocSchedCovItemCovCost, GL7LocationSchedCovItem, GL7LocSchedCovItemCov> {
  construct(owner: GL7LocSchedCovItemCovCost) {
    super(owner, owner.LocSchedCovItem, owner.LocSchedCovItemCov)
  }
}