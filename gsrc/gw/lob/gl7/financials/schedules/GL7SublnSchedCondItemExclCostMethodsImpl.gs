package gw.lob.gl7.financials.schedules

class GL7SublnSchedCondItemExclCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnSchedCondItemExclCost, GL7SublineSchedCondItem, GL7SublnSchedCondItmExcl> {
  construct(owner: GL7SublnSchedCondItemExclCost) {
    super(owner, owner.SublnSchedCondItem, owner.SublnSchedCondItemExcl)
  }
}