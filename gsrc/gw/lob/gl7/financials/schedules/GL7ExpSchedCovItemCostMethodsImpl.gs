package gw.lob.gl7.financials.schedules

class GL7ExpSchedCovItemCostMethodsImpl extends GL7AbstractSchedItemCostMethods<GL7ExpSchedCovItemCost, GL7ExposureSchedCovItem> {
  construct(owner: GL7ExpSchedCovItemCost) {
    super(owner, owner.ExpSchedCovItem)
  }
}