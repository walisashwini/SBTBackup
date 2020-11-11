package gw.lob.gl7.financials.schedules

class GL7SublnTypSchExclItemCovCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnTypSchExclItemCovCost, entity.GL7SublineTypeSchExclItem, GL7SublnTypSchExclItmCov> {
  construct(owner: GL7SublnTypSchExclItemCovCost) {
    super(owner, owner.SublnTypSchExclItem, owner.SublnTypSchExclItemCov)
  }
}