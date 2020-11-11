package gw.lob.gl7.financials.schedules

class GL7SublnSchedCondItemCostMethodsImpl extends GL7AbstractSchedItemCostMethods<GL7SublnSchedCondItemCost, GL7SublineSchedCondItem> {
  construct(owner: GL7SublnSchedCondItemCost) {
    super(owner, owner.SublnSchedCondItem)
  }
}