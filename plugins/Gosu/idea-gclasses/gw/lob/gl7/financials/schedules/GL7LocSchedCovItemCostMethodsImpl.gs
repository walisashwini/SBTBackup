package gw.lob.gl7.financials.schedules

class GL7LocSchedCovItemCostMethodsImpl extends GL7AbstractSchedItemCostMethods<GL7LocSchedCovItemCost, GL7LocationSchedCovItem> {
  construct(owner: GL7LocSchedCovItemCost) {
    super(owner, owner.LocSchedCovItem)
  }
}