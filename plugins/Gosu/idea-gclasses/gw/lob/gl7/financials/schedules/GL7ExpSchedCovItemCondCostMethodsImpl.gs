package gw.lob.gl7.financials.schedules

class GL7ExpSchedCovItemCondCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7ExpSchedCovItemCondCost, GL7ExposureSchedCovItem, GL7ExpSchedCovItemCond> {
  construct(owner: GL7ExpSchedCovItemCondCost) {
    super(owner, owner.ExpSchedCovItem, owner.ExpSchedCovItemCond)
  }
}