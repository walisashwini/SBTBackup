package gw.lob.gl7.financials.schedules

class GL7SublnSchedExclItemCovCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnSchedExclItemCovCost, GL7SublineSchedExclItem, GL7SublnSchedExclItmCov> {
  construct(owner: GL7SublnSchedExclItemCovCost) {
    super(owner, owner.SublnSchedExclItem, owner.SublnSchedExclItemCov)
  }
}