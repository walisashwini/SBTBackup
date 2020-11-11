package gw.lob.gl7.financials.schedules

class GL7ExpSchedExclItemExclCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7ExpSchedExclItemExclCost, GL7ExposureSchedExclItem, GL7ExpSchedExclItemExcl> {
  construct(owner: GL7ExpSchedExclItemExclCost) {
    super(owner, owner.ExpSchedExclItem, owner.ExpSchedExclItemExcl)
  }
}