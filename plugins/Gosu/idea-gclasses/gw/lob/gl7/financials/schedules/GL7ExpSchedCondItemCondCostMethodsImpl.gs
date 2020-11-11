package gw.lob.gl7.financials.schedules

class GL7ExpSchedCondItemCondCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7ExpSchedCondItemCondCost, GL7ExposureSchedCondItem, GL7ExpSchedCondItemCond> {
  construct(owner: GL7ExpSchedCondItemCondCost) {
    super(owner, owner.ExpSchedCondItem, owner.ExpSchedCondItemCond)
  }
}