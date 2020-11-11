package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7SublnSchedExclItemCondMatcher extends AbstractConditionMatcher<GL7SublnSchedExclItmCond> {

  construct(owner : GL7SublnSchedExclItmCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7SublnSchedExclItmCond#GL7SublnSchedExclItem.PropertyInfo as ILinkPropertyInfo
  }

}