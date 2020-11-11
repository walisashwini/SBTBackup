package gw.lob.common.sbt.schedules.impl

uses gw.api.productmodel.ScheduleAutoNumberPropertyInfo
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleAdditionalInsuredPropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleAdditionalInterestPropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleBooleanPropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleDatePropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleDecimalPropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleForeignKeyPropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleForeignKeyWithOptionLabelsPropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleIntegerPropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleIntegerRangePropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleNamedInsuredPropertyInfo
uses gw.lob.common.sbt.schedules.impl.SchedulePercentPropertyInfo
uses gw.lob.common.sbt.schedules.impl.SchedulePolicyLocationPropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleReadOnlyPropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleStringPropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleTextAreaPropertyInfo
uses gw.lang.reflect.IType
uses gw.lang.reflect.TypeSystem
uses gw.lob.common.sbt.schedules.SelectedVersionPropertyInfoType
uses gw.lob.common.sbt.schedules.schemas.schedule_config.types.complex.AutoNumberPropertyInfoType
uses gw.lob.common.sbt.schedules.schemas.schedule_config.types.complex.BasePropertyInfoType
uses gw.lob.common.sbt.schedules.schemas.schedule_config.types.complex.PropertyInfoVersionType
uses gw.api.locale.DisplayKey

class ScheduleConfigXMLInfoProvider {

  construct() {}

  function newSchedulePropertyInfo(selectedProperty: SelectedVersionPropertyInfoType): SchedulePropertyInfo {
    var p = selectedProperty.PropInfo;

    switch (typeof p) {
      case AutoNumberPropertyInfoType :        
        return newScheduleAutoNumberPropertyInfo(p)
      case PropertyInfoVersionType:
          switch (p.Type) {
            case String:
                return newScheduleStringPropertyInfo(p, selectedProperty.Name)
            case Boolean:
                return newScheduleBooleanPropertyInfo(p, selectedProperty.Name)
            case Integer:
                return newScheduleIntegerPropertyInfo(p, selectedProperty.Name)
            case Date:
                return newScheduleDatePropertyInfo(p, selectedProperty.Name)
            case ForeignKey:
                return newScheduleForeignKeyProxyPropertyInfo(p, selectedProperty.Name)
            case PolicyLocation:
                return newSchedulePolicyLocationProxyPropertyInfo(p, selectedProperty.Name)
            case NamedInsured:
                return newScheduleNamedInsuredProxyPropertyInfo(p, selectedProperty.Name)
            case ForeignKeyWithOptionLabels:
                return newScheduleForeignKeyWithOptionLabelsProxyPropertyInfo(p, selectedProperty.Name)
            case Percent:
                return newSchedulePercentPropertyInfo(p, selectedProperty.Name)
            case Decimal:
                return newScheduleDecimalPropertyInfo(p, selectedProperty.Name)
            case ReadOnly:
                return newScheduleReadOnlyPropertyInfo(p, selectedProperty.Name)
            case TextArea:
                return newScheduleTextAreaPropertyInfo(p, selectedProperty.Name)
            case AdditionalInsured:
                return newAdditionalInsuredPropertyInfo(p, selectedProperty.Name)
            case AdditionalInterest:
                return newAdditionalInterestPropertyInfo(p, selectedProperty.Name)
            case Option:
                return newScheduleOptionPropertyInfo(p, selectedProperty.Name)
            case PolicyContact:
              return newPolicyContactPropertyInfo(p, selectedProperty.Name)
            default:
              throw "unknown SchedulePropertyInfo type ${p.Type}"
          }
        default:
          throw "unknown PropertyInfo type ${typeof p}"
    }
  }
  
  private function newScheduleAutoNumberPropertyInfo(propInfo : AutoNumberPropertyInfoType) 
    : ScheduleAutoNumberPropertyInfo {
    return new ScheduleAutoNumberPropertyInfo(propInfo.ColumnName, getLabel(propInfo), propInfo.Required, false, -1)
  }
  
  private function newScheduleStringPropertyInfo(propInfo : PropertyInfoVersionType, propertyInfoName : String)
    : ScheduleStringPropertyInfo {
    
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleStringPropertyInfo(schedItemType, propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Default)
    }
    return new ScheduleStringPropertyInfo(propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Default)
  }

  private function newScheduleReadOnlyPropertyInfo(propInfo : PropertyInfoVersionType, propertyInfoName : String)
      : ScheduleReadOnlyPropertyInfo {

    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleReadOnlyPropertyInfo(schedItemType, propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.MethodExpression, propInfo.Default)
    }
    return new ScheduleReadOnlyPropertyInfo(propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.MethodExpression, propInfo.Default)
  }

  private function newScheduleTextAreaPropertyInfo(propInfo : PropertyInfoVersionType, propertyInfoName : String)
      : ScheduleTextAreaPropertyInfo {

    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleTextAreaPropertyInfo(schedItemType, propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Default)
    }
    return new ScheduleTextAreaPropertyInfo(propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Default)
  }

  private function newScheduleOptionPropertyInfo(propInfo : PropertyInfoVersionType, propertyInfoName : String)
      : ScheduleOptionPropertyInfo {

    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleOptionPropertyInfo (schedItemType, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propertyInfoName, propInfo.Default)
    }
    return new ScheduleOptionPropertyInfo (propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propertyInfoName, propInfo.Default)
  }

  private function newScheduleBooleanPropertyInfo(propInfo : PropertyInfoVersionType, propertyInfoName : String)
    : ScheduleBooleanPropertyInfo {
      
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleBooleanPropertyInfo(schedItemType, propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Default)
    }
    return new ScheduleBooleanPropertyInfo(propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Default)
  }
  
  private function newScheduleIntegerPropertyInfo(propInfo : PropertyInfoVersionType, propertyInfoName : String)
    : ScheduleIntegerPropertyInfo {
    
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      if (propInfo.Minimum != null or propInfo.Maximum != null) {
        return new ScheduleIntegerRangePropertyInfo(schedItemType, propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Minimum, propInfo.Maximum, propInfo.Default)
      }
      return new ScheduleIntegerPropertyInfo(schedItemType, propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Default)
    }
    if (propInfo.Minimum != null or propInfo.Maximum != null) {
      return new ScheduleIntegerRangePropertyInfo(propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Minimum, propInfo.Maximum, propInfo.Default)
    }
    return new ScheduleIntegerPropertyInfo(propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Default)
  }

  private function newSchedulePercentPropertyInfo(propInfo : PropertyInfoVersionType, propertyInfoName : String): SchedulePercentPropertyInfo {
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new SchedulePercentPropertyInfo(schedItemType, propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Default)
    }
    return new SchedulePercentPropertyInfo(propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Default)
  }

  private function newScheduleDatePropertyInfo(propInfo : PropertyInfoVersionType, propertyInfoName : String)
    : ScheduleDatePropertyInfo {
    
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleDatePropertyInfo(schedItemType, propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
    }
    return new ScheduleDatePropertyInfo(propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
  }
  
  private function newScheduleForeignKeyProxyPropertyInfo(propInfo : PropertyInfoVersionType, propertyInfoName : String) : SchedulePropertyInfo {
    
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleForeignKeyPropertyInfo(schedItemType, propertyInfoName, propInfo.ColumnName,
        getLabel(propInfo), propInfo.ValueRangeGetter, propInfo.Required)
    }
    return new ScheduleForeignKeyPropertyInfo (propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.ValueRangeGetter, propInfo.Required)
  }

  private function newScheduleForeignKeyWithOptionLabelsProxyPropertyInfo(propInfo : PropertyInfoVersionType, propertyInfoName : String) : SchedulePropertyInfo {

    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleForeignKeyWithOptionLabelsPropertyInfo(schedItemType, propertyInfoName, propInfo.ColumnName,
          getLabel(propInfo), propInfo.ValueRangeGetter, propInfo.Required, propInfo.OptionGroupLabelMethodExpression,
          propInfo.OptionLabelMethodExpression)
    }
    return new ScheduleForeignKeyWithOptionLabelsPropertyInfo (propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.ValueRangeGetter, propInfo.Required,
        propInfo.OptionGroupLabelMethodExpression, propInfo.OptionLabelMethodExpression)
  }
  
  private function newSchedulePolicyLocationProxyPropertyInfo(propInfo : PropertyInfoVersionType, propertyInfoName : String) : SchedulePropertyInfo {
    var schedItemType = getEntityTypeFromName(propInfo)
    return new SchedulePolicyLocationPropertyInfo(schedItemType, propertyInfoName, propInfo.ColumnName,
        getLabel(propInfo), propInfo.ValueRangeGetter, propInfo.Required)
  }
  
  private function newScheduleNamedInsuredProxyPropertyInfo(propInfo : PropertyInfoVersionType, propertyInfoName : String) : SchedulePropertyInfo {
    return new ScheduleNamedInsuredPropertyInfo(propertyInfoName, propInfo.ColumnName,
        getLabel(propInfo), propInfo.ValueRangeGetter, propInfo.Required)
  }

  private function newScheduleDecimalPropertyInfo(propInfo: PropertyInfoVersionType, propertyInfoName : String): SchedulePropertyInfo {
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleDecimalPropertyInfo(schedItemType, propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Minimum, propInfo.Maximum, propInfo.Default)
    }
    return new ScheduleDecimalPropertyInfo (propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Minimum, propInfo.Maximum, propInfo.Default)
  }

  private function newAdditionalInsuredPropertyInfo(propInfo: PropertyInfoVersionType, propertyInfoName : String): SchedulePropertyInfo {
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleAdditionalInsuredPropertyInfo(schedItemType, propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
    }
    return new ScheduleAdditionalInsuredPropertyInfo (propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
  }

  private function newAdditionalInterestPropertyInfo(propInfo: PropertyInfoVersionType, propertyInfoName: String): SchedulePropertyInfo {
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleAdditionalInterestPropertyInfo(schedItemType, propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
    }
    return new ScheduleAdditionalInterestPropertyInfo (propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
  }

  private function getEntityTypeFromName(propInfo : PropertyInfoVersionType) : IType {
    return TypeSystem.getByFullName("entity.${propInfo.ScheduledItemType}")
  }
  
  public static function getLabel(propInfo : BasePropertyInfoType) : String {
    var key = propInfo.ColumnLabel.replaceFirst("displaykey.", "")    
    return DisplayKey.get(key)
  }

  private function newPolicyContactPropertyInfo(propInfo: PropertyInfoVersionType, propertyInfoName : String): SchedulePropertyInfo {
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new SchedulePolicyContactPropertyInfo(schedItemType, propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
    }
    return new SchedulePolicyContactPropertyInfo (propertyInfoName, propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
  }
}
