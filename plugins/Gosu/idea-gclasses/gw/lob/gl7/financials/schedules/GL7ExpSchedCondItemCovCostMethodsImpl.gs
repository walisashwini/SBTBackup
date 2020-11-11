package gw.lob.gl7.financials.schedules

class GL7ExpSchedCondItemCovCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7ExpSchedCondItemCovCost, GL7ExposureSchedCondItem, GL7ExpSchedCondItemCov> {
  construct(owner: GL7ExpSchedCondItemCovCost) {
    super(owner, owner.ExpSchedCondItem, owner.ExpSchedCondItemCov)
  }
}