package gw.lob.gl7.financials.schedules

class GL7LocSchedCovItemCondCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7LocSchedCovItemCondCost, GL7LocationSchedCovItem, GL7LocSchedCovItemCond> {
  construct(owner: GL7LocSchedCovItemCondCost) {
    super(owner, owner.LocSchedCovItem, owner.LocSchedCovItemCond)
  }
}