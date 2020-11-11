package gw.lob.gl7.financials.schedules

class GL7LocSchedCondItemCovCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7LocSchedCondItemCovCost, GL7LocationSchedCondItem, GL7LocSchedCondItemCov> {
  construct(owner: GL7LocSchedCondItemCovCost) {
    super(owner, owner.LocSchedCondItem, owner.LocSchedCondItemCov)
  }
}