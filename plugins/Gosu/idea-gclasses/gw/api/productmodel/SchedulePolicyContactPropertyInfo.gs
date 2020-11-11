package gw.api.productmodel

uses gw.lang.reflect.IType

class SchedulePolicyContactPropertyInfo extends gw.api.productmodel.AbstractSchedulePropertyInfo<PolicyContactRole> {

  construct(columnName : String, colLabel : String, isRequired : boolean) {
    super(columnName, colLabel, isRequired, false, -1)
  }

  construct(scheduledItemType : IType, columnName : String, colLabel : String, isRequired : boolean) {
    super(scheduledItemType, columnName, colLabel, isRequired, false, -1)
  }

  override property get ValueType() : String {
    return "PolicyContact"
  }

}