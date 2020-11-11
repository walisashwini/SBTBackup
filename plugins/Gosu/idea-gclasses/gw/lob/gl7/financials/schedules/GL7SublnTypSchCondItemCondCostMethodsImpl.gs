package gw.lob.gl7.financials.schedules

class GL7SublnTypSchCondItemCondCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnTypSchCondItemCondCost, GL7SublineTypeSchCondItem, GL7SublnTypSchCondItmCond> {
  construct(owner: GL7SublnTypSchCondItemCondCost) {
    super(owner, owner.SublnTypSchCondItem, owner.SublnTypSchCondItemCond)
  }
}