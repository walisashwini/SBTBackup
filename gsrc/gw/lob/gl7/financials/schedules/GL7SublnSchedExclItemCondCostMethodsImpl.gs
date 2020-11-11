package gw.lob.gl7.financials.schedules

class GL7SublnSchedExclItemCondCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnSchedExclItemCondCost, GL7SublineSchedExclItem, GL7SublnSchedExclItmCond> {
  construct(owner: GL7SublnSchedExclItemCondCost) {
    super(owner, owner.SublnSchedExclItem, owner.SublnSchedExclItemCond)
  }

}