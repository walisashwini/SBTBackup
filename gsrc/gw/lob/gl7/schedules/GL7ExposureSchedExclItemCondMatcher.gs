package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7ExposureSchedExclItemCondMatcher extends AbstractConditionMatcher<GL7ExpSchedExclItemCond> {

  construct(owner : GL7ExpSchedExclItemCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7ExpSchedExclItemCond#GL7ExposureSchedExclItem.PropertyInfo as ILinkPropertyInfo
  }
}