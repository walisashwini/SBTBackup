package gw.lob.gl7.financials.schedules

class GL7SublnTypSchCovItemExclCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnTypSchCovItemExclCost, GL7SublineTypeSchCovItem, GL7SublnTypSchCovItmExcl> {
  construct(owner: GL7SublnTypSchCovItemExclCost) {
    super(owner, owner.SublnTypSchCovItem, owner.SublnTypSchCovItemExcl)
  }
}