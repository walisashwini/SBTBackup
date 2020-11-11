package gw.lob.gl7.financials.schedules

class GL7SublnSchedCovItemCondCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnSchedCovItemCondCost, GL7SublineSchedCovItem, GL7SublnSchedCovItmCond> {
  construct(owner: GL7SublnSchedCovItemCondCost) {
    super(owner, owner.SublnSchedCovItem, owner.SublnSchedCovItemCond)
  }
}