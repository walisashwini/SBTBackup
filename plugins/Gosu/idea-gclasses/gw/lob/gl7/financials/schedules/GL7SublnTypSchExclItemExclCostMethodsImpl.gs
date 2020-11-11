package gw.lob.gl7.financials.schedules

class GL7SublnTypSchExclItemExclCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnTypSchExclItemExclCost, GL7SublineTypeSchExclItem, GL7SublnTypSchExclItmExcl> {
  construct(owner: GL7SublnTypSchExclItemExclCost) {
    super(owner, owner.SublnTypSchExclItem, owner.SublnTypSchExclItemExcl)
  }
}