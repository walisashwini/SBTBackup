package gw.api.productmodel

uses gw.lang.reflect.IType

class ScheduleAdditionalInsuredPropertyInfo extends gw.api.productmodel.AbstractSchedulePropertyInfo<PolicyAddlInsuredDetail> {

  construct(columnName : String, colLabel : String, isRequired : boolean) {
    super(columnName, colLabel, isRequired, false, -1)
  }

  construct(scheduledItemType : IType, columnName : String, colLabel : String, isRequired : boolean) {
    super(scheduledItemType, columnName, colLabel, isRequired, false, -1)
  }

  override property get ValueType() : String {
    return "AdditionalInsured"
  }
}