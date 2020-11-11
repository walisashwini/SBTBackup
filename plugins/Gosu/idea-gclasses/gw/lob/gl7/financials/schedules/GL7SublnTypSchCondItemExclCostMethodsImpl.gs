package gw.lob.gl7.financials.schedules

class GL7SublnTypSchCondItemExclCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnTypSchCondItemExclCost, GL7SublineTypeSchCondItem, GL7SublnTypSchCondItmExcl> {
  construct(owner: GL7SublnTypSchCondItemExclCost) {
    super(owner, owner.SublnTypSchCondItem, owner.SublnTypSchCondItemExcl)
  }
}