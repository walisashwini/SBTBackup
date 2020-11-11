package gw.lob.gl7.financials.schedules

class GL7SublnSchedCovItemCostMethodsImpl extends GL7AbstractSchedItemCostMethods<GL7SublnSchedCovItemCost, GL7SublineSchedCovItem> {
  construct(owner: GL7SublnSchedCovItemCost) {
    super(owner, owner.SublnSchedCovItem)
  }
}