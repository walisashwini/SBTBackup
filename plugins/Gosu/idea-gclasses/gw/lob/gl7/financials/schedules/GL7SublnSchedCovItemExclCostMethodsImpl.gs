package gw.lob.gl7.financials.schedules

class GL7SublnSchedCovItemExclCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnSchedCovItemExclCost, GL7SublineSchedCovItem, GL7SublnSchedCovItmExcl> {
  construct(owner: GL7SublnSchedCovItemExclCost) {
    super(owner, owner.SublnSchedCovItem, owner.SublnSchedCovItemExcl)
  }
}