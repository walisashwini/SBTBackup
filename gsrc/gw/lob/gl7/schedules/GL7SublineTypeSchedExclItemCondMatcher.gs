package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7SublineTypeSchedExclItemCondMatcher extends AbstractConditionMatcher<GL7SublnTypSchExclItmCond> {

  construct(owner : GL7SublnTypSchExclItmCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7SublnTypSchExclItmCond#GL7SublineTypeSchExclItem.PropertyInfo as ILinkPropertyInfo
  }
}