package gw.lob.gl7.financials.schedules

class GL7ExpSchedExclItemCostMethodsImpl extends gw.lob.gl7.financials.schedules.GL7AbstractSchedItemCostMethods {
  construct(owner: GL7ExpSchedExclItemCost) {
    super(owner, owner.ExpSchedExclItem)
  }
}