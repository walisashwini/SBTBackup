package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7SublineTypeSchedCondItemCondMatcher extends AbstractConditionMatcher<GL7SublnTypSchCondItmCond> {

  construct(owner : GL7SublnTypSchCondItmCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7SublnTypSchCondItmCond#GL7SublineTypeSchCondItem.PropertyInfo as ILinkPropertyInfo
  }
}