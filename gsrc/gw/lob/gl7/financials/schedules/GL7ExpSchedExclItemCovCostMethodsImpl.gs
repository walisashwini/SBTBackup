package gw.lob.gl7.financials.schedules

class GL7ExpSchedExclItemCovCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7ExpSchedExclItemCovCost, GL7ExposureSchedExclItem, GL7ExpSchedExclItemCov> {
  construct(owner: GL7ExpSchedExclItemCovCost) {
    super(owner,owner.ExpSchedExclItem, owner.ExpSchedExclItemCov)
  }
}