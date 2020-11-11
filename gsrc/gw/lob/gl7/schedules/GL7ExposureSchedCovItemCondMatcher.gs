package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7ExposureSchedCovItemCondMatcher extends AbstractConditionMatcher<GL7ExpSchedCovItemCond> {

  construct(owner : GL7ExpSchedCovItemCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7ExpSchedCovItemCond#GL7ExposureSchedCovItem.PropertyInfo as ILinkPropertyInfo
  }
}