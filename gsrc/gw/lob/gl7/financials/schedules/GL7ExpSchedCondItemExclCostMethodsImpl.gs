package gw.lob.gl7.financials.schedules

class GL7ExpSchedCondItemExclCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7ExpSchedCondItemExclCost, GL7ExposureSchedCondItem, GL7ExpSchedCondItemExcl> {
  construct(owner: GL7ExpSchedCondItemExclCost) {
    super(owner, owner.ExpSchedCondItem, owner.ExpSchedCondItemExcl)
  }
}