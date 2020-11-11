package gw.lob.gl7.financials.schedules

class GL7SublnSchedCondItemCovCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnSchedCondItemCovCost, GL7SublineSchedCondItem, GL7SublnSchedCondItmCov> {
  construct(owner: GL7SublnSchedCondItemCovCost) {
    super(owner, owner.SublnSchedCondItem, owner.SublnSchedCondItemCov)
  }
}