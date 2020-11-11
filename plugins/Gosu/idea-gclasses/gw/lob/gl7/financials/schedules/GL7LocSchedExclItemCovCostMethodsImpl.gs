package gw.lob.gl7.financials.schedules

class GL7LocSchedExclItemCovCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7LocSchedExclItemCovCost, GL7LocationSchedExclItem, GL7LocSchedExclItemCov> {
  construct(owner: GL7LocSchedExclItemCovCost) {
    super(owner, owner.LocSchedExclItem, owner.LocSchedExclItemCov)
  }
}