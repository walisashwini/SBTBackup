package gw.lob.gl7.financials.schedules

class GL7SublnTypSchExclItemCondCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnTypSchExclItemCondCost, GL7SublineTypeSchExclItem, GL7SublnTypSchExclItmCond> {
  construct(owner: GL7SublnTypSchExclItemCondCost) {
    super(owner, owner.SublnTypSchExclItem, owner.SublnTypSchExclItemCond)
  }
}