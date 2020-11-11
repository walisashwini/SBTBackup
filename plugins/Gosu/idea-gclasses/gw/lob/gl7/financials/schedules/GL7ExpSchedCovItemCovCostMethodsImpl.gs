package gw.lob.gl7.financials.schedules

class GL7ExpSchedCovItemCovCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7ExpSchedCovItemCovCost, GL7ExposureSchedCovItem, GL7ExpSchedCovItemCov> {
  construct(owner: GL7ExpSchedCovItemCovCost) {
    super(owner, owner.ExpSchedCovItem, owner.ExpSchedCovItemCov)
  }
}