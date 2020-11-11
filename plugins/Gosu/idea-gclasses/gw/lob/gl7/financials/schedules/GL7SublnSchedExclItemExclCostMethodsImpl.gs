package gw.lob.gl7.financials.schedules

class GL7SublnSchedExclItemExclCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnSchedExclItemExclCost, GL7SublineSchedExclItem, GL7SublnSchedExclItmExcl> {
  construct(owner: GL7SublnSchedExclItemExclCost) {
    super(owner, owner.SublnSchedExclItem, owner.SublnSchedExclItemExcl)
  }
}