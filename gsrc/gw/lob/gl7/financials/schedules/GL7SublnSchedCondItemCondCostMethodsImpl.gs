package gw.lob.gl7.financials.schedules

class GL7SublnSchedCondItemCondCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnSchedCondItemCondCost, GL7SublineSchedCondItem, GL7SublnSchedCondItmCond> {
  construct(owner: GL7SublnSchedCondItemCondCost) {
    super(owner, owner.SublnSchedCondItem, owner.SublnSchedCondItemCond)
  }
}