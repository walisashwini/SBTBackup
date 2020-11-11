package gw.lob.common.displayable

uses gw.api.domain.Clause
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.api.productmodel.SchedulePropertyValueProvider
uses gw.api.web.job.JobWizardHelper
uses gw.lob.common.dependency.PropertyInstanceInfo
uses gw.lob.common.dependency.v2.ValueDependencySupport
uses gw.lob.common.sbt.schedules.impl.ScheduleOptionPropertyInfo
uses gw.lob.common.synchronizer.SyncPropertyMetaSupport

uses java.util.List

class ScheduledItemOptionDisplayableV2 extends ScheduledItemPropertyInfoDisplayableV2 <String> {

  construct(clause: Clause, scheduledItem : ScheduledItem, propertyInfo : SchedulePropertyInfo, displayableAdapter : SchedulePropertyInfoDisplayableAdapter) {
    super(clause, scheduledItem, propertyInfo, displayableAdapter)
    _valueProvider = PropertyValueProvider as SchedulePropertyValueProvider<String>
  }

  override property get ValueRange(): List<String> {
    return ValueDependencySupport.Instance.valueRange(Clause, this.SchedulePropertyInfo, Entity) ?: {}
  }

  override function onChange(wizard : JobWizardHelper) {
    var currentPropertyInfo = new PropertyInstanceInfo((_propertyInfo as ScheduleOptionPropertyInfo).PropertyInfoName, _clause.Pattern.CodeIdentifier, _clause, _clause, true)
    SyncPropertyMetaSupport.Instance.executeBeforeChange(currentPropertyInfo)
    super.onChange(wizard)
    SyncPropertyMetaSupport.Instance.executeAfterChange(currentPropertyInfo)
  }
}