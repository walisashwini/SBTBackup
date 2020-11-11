package gw.lob.gl7.financials.schedules

class GL7SublnTypSchCovItemCondCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnTypSchCovItemCondCost, GL7SublineTypeSchCovItem, GL7SublnTypSchCovItmCond> {
  construct(owner: GL7SublnTypSchCovItemCondCost) {
    super(owner, owner.SublnTypSchCovItem, owner.SublnTypSchCovItemCond)
  }
}