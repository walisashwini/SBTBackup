package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7SublineTypeSchedCovItemCondMatcher extends AbstractConditionMatcher<GL7SublnTypSchCovItmCond> {

  construct(owner : GL7SublnTypSchCovItmCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7SublnTypSchCovItmCond#GL7SublineTypeSchCovItem.PropertyInfo as ILinkPropertyInfo
  }
}