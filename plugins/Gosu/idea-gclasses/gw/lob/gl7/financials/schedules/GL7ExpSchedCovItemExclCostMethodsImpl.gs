package gw.lob.gl7.financials.schedules

class GL7ExpSchedCovItemExclCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7ExpSchedCovItemExclCost, GL7ExposureSchedCovItem, GL7ExpSchedCovItemExcl> {
  construct(owner: GL7ExpSchedCovItemExclCost) {
    super(owner, owner.ExpSchedCovItem, owner.ExpSchedCovItemExcl)
  }
}