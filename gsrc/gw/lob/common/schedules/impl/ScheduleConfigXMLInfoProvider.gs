package gw.lob.common.schedules.impl

uses gw.api.productmodel.ScheduleAdditionalInsuredPropertyInfo
uses gw.api.productmodel.ScheduleAdditionalInterestPropertyInfo
uses gw.api.productmodel.ScheduleAutoNumberPropertyInfo
uses gw.api.productmodel.ScheduleBooleanPropertyInfo
uses gw.api.productmodel.ScheduleDatePropertyInfo
uses gw.api.productmodel.ScheduleDecimalPropertyInfo
uses gw.api.productmodel.ScheduleIntegerPropertyInfo
uses gw.api.productmodel.ScheduleIntegerRangePropertyInfo
uses gw.api.productmodel.SchedulePercentPropertyInfo
uses gw.api.productmodel.SchedulePolicyContactPropertyInfo
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.api.productmodel.ScheduleReadOnlyPropertyInfo
uses gw.api.productmodel.ScheduleStringPropertyInfo
uses gw.api.productmodel.ScheduleStringPropertyInfoWithDefaultValue
uses gw.api.productmodel.ScheduleTextAreaPropertyInfo
uses gw.api.productmodel.ScheduleTypeKeyPropertyInfo
uses gw.api.productmodel.ScheduleTypePropertyInfoWithDefaultValue
uses gw.entity.ITypeFilter
uses gw.lang.reflect.IType
uses gw.lang.reflect.TypeSystem
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.AdditionalInsuredPropertyInfoType
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.AdditionalInterestPropertyInfoType
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.AutoNumberPropertyInfoType
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.BooleanPropertyInfoType
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.DatePropertyInfoType
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.DecimalPropertyInfoType
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.ForeignKeyPropertyInfoType
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.ForeignKeyWithOptionLabelsPropertyInfoType
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.IntegerPropertyInfoType
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.NamedInsuredPropertyInfoType
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.PercentPropertyInfoType
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.PolicyContactPropertyInfoType
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.PolicyLocationPropertyInfoType
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.PropertyInfoType
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.ReadOnlyPropertyInfoType
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.StringPropertyInfoType
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.TextAreaPropertyInfoType
uses gw.lob.common.schedules.schemas.schedule_config.types.complex.TypeKeyPropertyInfoType
uses gw.api.locale.DisplayKey

/**
 * @deprecated This is for BP backward compatibility. Replaced by {@link gw.lob.common.sbt.schedules.impl.ScheduleConfigXMLInfoProvider}
 */
class ScheduleConfigXMLInfoProvider {

  construct() {}

  function newSchedulePropertyInfo(p : PropertyInfoType) : SchedulePropertyInfo {
    switch (typeof p) {
      case AutoNumberPropertyInfoType :        
        return newScheduleAutoNumberPropertyInfo(p)
      case StringPropertyInfoType :
        return newScheduleStringPropertyInfo(p)
      case BooleanPropertyInfoType :
        return newScheduleBooleanPropertyInfo(p)
      case IntegerPropertyInfoType :
        return newScheduleIntegerPropertyInfo(p)
      case DatePropertyInfoType :
        return newScheduleDatePropertyInfo(p)
      case TypeKeyPropertyInfoType :
        return newScheduleTypeKeyPropertyInfo(p)
      case ForeignKeyPropertyInfoType :
        return newScheduleForeignKeyProxyPropertyInfo(p)
      case PolicyLocationPropertyInfoType :
        return newSchedulePolicyLocationProxyPropertyInfo(p)
      case NamedInsuredPropertyInfoType :
        return newScheduleNamedInsuredProxyPropertyInfo(p)
      case ForeignKeyWithOptionLabelsPropertyInfoType :
        return newScheduleForeignKeyWithOptionLabelsProxyPropertyInfo(p)
      case PercentPropertyInfoType :
        return newSchedulePercentPropertyInfo(p)
      case DecimalPropertyInfoType :
        return newScheduleDecimalPropertyInfo(p)
      case ReadOnlyPropertyInfoType :
        return newScheduleReadOnlyPropertyInfo(p)
      case TextAreaPropertyInfoType :
        return newScheduleTextAreaPropertyInfo(p)
      case AdditionalInsuredPropertyInfoType :
        return newAdditionalInsuredPropertyInfo(p)
      case AdditionalInterestPropertyInfoType :
          return newAdditionalInterestPropertyInfo(p)
      case PolicyContactPropertyInfoType :
        return newPolicyContactPropertyInfo(p)
      default:
        throw "unknown SchedulePropertyInfo type ${typeof p}"   
    }
  }
  
  private function newScheduleAutoNumberPropertyInfo(propInfo : AutoNumberPropertyInfoType) 
    : ScheduleAutoNumberPropertyInfo {
    return new ScheduleAutoNumberPropertyInfo(propInfo.ColumnName, getLabel(propInfo), propInfo.Required, false, -1)
  }
  
  private function newScheduleStringPropertyInfo(propInfo : StringPropertyInfoType) 
    : ScheduleStringPropertyInfo {    
    
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleStringPropertyInfoWithDefaultValue(schedItemType, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Default)
    }
    return new ScheduleStringPropertyInfoWithDefaultValue(propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Default)
  }

  private function newScheduleReadOnlyPropertyInfo(propInfo : ReadOnlyPropertyInfoType)
      : ScheduleReadOnlyPropertyInfo {

    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleReadOnlyPropertyInfo(schedItemType, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.MethodExpression, propInfo.Default)
    }
    return new ScheduleReadOnlyPropertyInfo(propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.MethodExpression, propInfo.Default)
  }

  private function newScheduleTextAreaPropertyInfo(propInfo : TextAreaPropertyInfoType)
      : ScheduleTextAreaPropertyInfo {

    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleTextAreaPropertyInfo(schedItemType, propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
    }
    return new ScheduleTextAreaPropertyInfo(propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
  }

  private function newScheduleBooleanPropertyInfo(propInfo : BooleanPropertyInfoType)
    : ScheduleBooleanPropertyInfo {
      
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleBooleanPropertyInfo(schedItemType, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, false, -1)
    }
    return new ScheduleBooleanPropertyInfo(propInfo.ColumnName, getLabel(propInfo), propInfo.Required, false, -1)
  }
  
  private function newScheduleIntegerPropertyInfo(propInfo : IntegerPropertyInfoType) 
    : ScheduleIntegerPropertyInfo {
    
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      if (propInfo.Minimum != null or propInfo.Maximum != null) {
        return new ScheduleIntegerRangePropertyInfo(schedItemType, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Minimum, propInfo.Maximum)
      }
      return new ScheduleIntegerPropertyInfo(schedItemType, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, false, -1)
    }
    if (propInfo.Minimum != null or propInfo.Maximum != null) {
      return new ScheduleIntegerRangePropertyInfo(propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Minimum, propInfo.Maximum)
    }
    return new ScheduleIntegerPropertyInfo(propInfo.ColumnName, getLabel(propInfo), propInfo.Required, false, -1)
  }

  private function newSchedulePercentPropertyInfo(propInfo : PercentPropertyInfoType): SchedulePercentPropertyInfo {
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new SchedulePercentPropertyInfo(schedItemType, propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
    }
    return new SchedulePercentPropertyInfo(propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
  }

  private function newScheduleDatePropertyInfo(propInfo : DatePropertyInfoType)
    : ScheduleDatePropertyInfo {
    
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleDatePropertyInfo(schedItemType, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, false, -1)
    }
    return new ScheduleDatePropertyInfo(propInfo.ColumnName, getLabel(propInfo), propInfo.Required, false, -1)
  }
  
  private function newScheduleTypeKeyPropertyInfo(propInfo : TypeKeyPropertyInfoType)
    : ScheduleTypeKeyPropertyInfo {
    
    var typeListName = propInfo.TypeList
    var typeList = TypeSystem.getByFullName("typekey.${typeListName}") as gw.entity.ITypeList
    var typeFilter : ITypeFilter = null
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleTypePropertyInfoWithDefaultValue(schedItemType, propInfo.ColumnName, getLabel(propInfo), typeList, typeFilter, propInfo.Required, propInfo.Default)
    }
    if (propInfo.TypeFilter != null) {
      typeFilter = typeList.TypeInfo.Properties.firstWhere(\ p -> p.Name == propInfo.TypeFilter).Accessor?.getValue(typeList) as ITypeFilter
    }
    return new ScheduleTypePropertyInfoWithDefaultValue(propInfo.ColumnName, getLabel(propInfo), typeList, typeFilter, propInfo.Required, propInfo.Default)
  }
  
  private function newScheduleForeignKeyProxyPropertyInfo(propInfo : ForeignKeyPropertyInfoType) : SchedulePropertyInfo {
    
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ProxyScheduleForeignKeyPropertyInfo(schedItemType, propInfo.ColumnName, 
        getLabel(propInfo), propInfo.ValueRangeGetter, propInfo.Required)
    }
    return new ProxyScheduleForeignKeyPropertyInfo(propInfo.ColumnName, getLabel(propInfo), propInfo.ValueRangeGetter, propInfo.Required)
  }

  private function newScheduleForeignKeyWithOptionLabelsProxyPropertyInfo(propInfo : ForeignKeyWithOptionLabelsPropertyInfoType) : SchedulePropertyInfo {

    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ProxyScheduleForeignKeyWithOptionLabelsPropertyInfo (schedItemType, propInfo.ColumnName,
          getLabel(propInfo), propInfo.ValueRangeGetter, propInfo.Required, propInfo.OptionGroupLabelMethodExpression,
          propInfo.OptionLabelMethodExpression)
    }
    return new ProxyScheduleForeignKeyWithOptionLabelsPropertyInfo (propInfo.ColumnName, getLabel(propInfo), propInfo.ValueRangeGetter, propInfo.Required,
        propInfo.OptionGroupLabelMethodExpression, propInfo.OptionLabelMethodExpression)
  }
  
  private function newSchedulePolicyLocationProxyPropertyInfo(propInfo : PolicyLocationPropertyInfoType) : SchedulePropertyInfo {
    var schedItemType = getEntityTypeFromName(propInfo)
    return new ProxySchedulePolicyLocationPropertyInfo(schedItemType, propInfo.ColumnName, 
        getLabel(propInfo), propInfo.ValueRangeGetter, propInfo.Required)
  }
  
  private function newScheduleNamedInsuredProxyPropertyInfo(propInfo : NamedInsuredPropertyInfoType) : SchedulePropertyInfo {
    return new ProxyScheduleNamedInsuredPropertyInfo(propInfo.ColumnName, 
        getLabel(propInfo), propInfo.ValueRangeGetter, propInfo.Required)
  }

  private function newScheduleDecimalPropertyInfo(propInfo: DecimalPropertyInfoType): SchedulePropertyInfo {
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleDecimalPropertyInfo(schedItemType, propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Min, propInfo.Max)
    }
    return new ScheduleDecimalPropertyInfo(propInfo.ColumnName, getLabel(propInfo), propInfo.Required, propInfo.Min, propInfo.Max)
  }

  private function newAdditionalInsuredPropertyInfo(propInfo: AdditionalInsuredPropertyInfoType): SchedulePropertyInfo {
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleAdditionalInsuredPropertyInfo(schedItemType, propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
    }
    return new ScheduleAdditionalInsuredPropertyInfo(propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
  }

  private function newAdditionalInterestPropertyInfo(propInfo: AdditionalInterestPropertyInfoType): SchedulePropertyInfo {
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new ScheduleAdditionalInterestPropertyInfo(schedItemType, propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
    }
    return new ScheduleAdditionalInterestPropertyInfo(propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
  }

  private function getEntityTypeFromName(propInfo : PropertyInfoType) : IType {
    return TypeSystem.getByFullName("entity.${propInfo.ScheduledItemType}")
  }
  
  public static function getLabel(propInfo : PropertyInfoType) : String {
    var key = propInfo.ColumnLabel.replaceFirst("displaykey.", "")    
    return DisplayKey.get(key)
  }

  private function newPolicyContactPropertyInfo(propInfo: PolicyContactPropertyInfoType): SchedulePropertyInfo {
    if (propInfo.ScheduledItemType != null) {
      var schedItemType = getEntityTypeFromName(propInfo)
      return new SchedulePolicyContactPropertyInfo(schedItemType, propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
    }
    return new SchedulePolicyContactPropertyInfo(propInfo.ColumnName, getLabel(propInfo), propInfo.Required)
  }
}
