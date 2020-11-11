package gw.lob.common.sbt.schedules.impl

uses gw.api.domain.Clause
uses gw.api.domain.Schedule
uses gw.api.productmodel.IValueRangeGetter
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.entity.IEntityPropertyInfo
uses gw.lang.reflect.IType
uses gw.lang.reflect.TypeSystem

class ScheduleForeignKeyPropertyInfo extends AbstractSchedulePropertyInfo {

  protected var _columnName : String as readonly ColumnName
  protected var _columnLabel : String as readonly ColumnLabel
  protected var _valueRangeGetterClassName : String as readonly ValueRangeGetterClassName
  protected var _required : boolean as readonly Required
  protected var _scheduledItemType : IType as readonly ItemType

  construct(propertyInfoName: String, colName: String, colLabel: String,
    valRangeGetterClassName: String, isRequired: boolean) {

    super(propertyInfoName, colName, colLabel, isRequired)
    init(colName, colLabel, valRangeGetterClassName, isRequired)
  }

  construct(scheduledItemType: IType, propertyInfoName: String, colName: String, colLabel: String,
    valRangeGetterClassName: String, isRequired: boolean) {

    super(scheduledItemType, propertyInfoName, colName, colLabel, isRequired)
    init(colName, colLabel, valRangeGetterClassName, isRequired)
    _scheduledItemType = scheduledItemType
  }

  private function init(colName : String, colLabel : String,
    valRangeGetterClassName : String, isRequired : boolean) {

    _columnName = colName
    _columnLabel = colLabel
    _valueRangeGetterClassName = valRangeGetterClassName
    _required = isRequired
  }
  
  reified function toSchedulePropertyInfo<T extends Schedule & Clause>(owner : T) : SchedulePropertyInfo {
    var valRangeGetter = newValueRangeGetterInstance(owner)
    if (ItemType != null) {
      return new gw.api.productmodel.ScheduleForeignKeyPropertyInfo(ItemType, ColumnName, ColumnLabel, valRangeGetter, Required, false, -1)
    }
    return new gw.api.productmodel.ScheduleForeignKeyPropertyInfo(ColumnName, ColumnLabel, valRangeGetter, Required, false, -1)
  }

  reified protected function newValueRangeGetterInstance<T extends Schedule & Clause>(owner : T) : IValueRangeGetter {
    var valRangeGetterType = TypeSystem.getByFullName(_valueRangeGetterClassName)
    if (not (IValueRangeGetter.Type.isAssignableFrom(valRangeGetterType))) {
      throw "${valRangeGetterType} is not an instance of ${IValueRangeGetter.Type.Name}"
    }
    var ownerType = (typeof owner).Supertype
    var constructor = valRangeGetterType.TypeInfo.getCallableConstructor({ownerType})
    if (constructor == null) {
      throw "could not find a constructor in ${valRangeGetterType} that accepts ${ownerType}"
    }
    return constructor.Constructor.newInstance({owner}) as IValueRangeGetter
  }

  reified function getPropertyInfo<T extends Schedule & Clause>(owner : T) : IEntityPropertyInfo {
    return toSchedulePropertyInfo(owner).PropertyInfo
  }

  override property get ValueType() : String {
    return null
  }
}
