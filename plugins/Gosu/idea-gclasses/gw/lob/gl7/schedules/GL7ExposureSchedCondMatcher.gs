package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7ExposureSchedCondMatcher extends AbstractConditionMatcher<GL7ExposureSchedCond> {
  construct(owner : GL7ExposureSchedCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7ExposureSchedCond#GL7Exposure.PropertyInfo as ILinkPropertyInfo
  }
}