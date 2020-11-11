package gw.lob.gl7.financials.schedules

class GL7ExpSchedExclItemCondCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7ExpSchedExclItemCondCost, GL7ExposureSchedExclItem, GL7ExpSchedExclItemCond> {
  construct(owner: GL7ExpSchedExclItemCondCost) {
    super(owner, owner.ExpSchedExclItem, owner.ExpSchedExclItemCond)
  }
}