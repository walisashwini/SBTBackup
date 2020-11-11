package gw.lob.gl7.financials.schedules

class GL7ExpSchedCondItemCostMethodsImpl extends GL7AbstractSchedItemCostMethods<GL7ExpSchedCondItemCost, GL7ExposureSchedCondItem> {
  construct(owner: GL7ExpSchedCondItemCost) {
    super(owner, owner.ExpSchedCondItem)
  }
}