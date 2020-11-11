package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7SublnSchedCondItemCondMatcher extends AbstractConditionMatcher<GL7SublnSchedCondItmCond> {

  construct(owner : GL7SublnSchedCondItmCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7SublnSchedCondItmCond#GL7SublnSchedCondItem.PropertyInfo as ILinkPropertyInfo
  }
}
