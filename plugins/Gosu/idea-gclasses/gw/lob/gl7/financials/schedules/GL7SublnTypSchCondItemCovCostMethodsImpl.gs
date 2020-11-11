package gw.lob.gl7.financials.schedules

class GL7SublnTypSchCondItemCovCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7SublnTypSchCondItemCovCost, GL7SublineTypeSchCondItem, GL7SublnTypSchCondItmCov> {
  construct(owner: GL7SublnTypSchCondItemCovCost) {
    super(owner, owner.SublnTypSchCondItem, owner.SublnTypSchCondItemCov)
  }
}