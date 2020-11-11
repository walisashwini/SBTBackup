package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7LocationSchedExclItemCondMatcher extends AbstractConditionMatcher<GL7LocSchedExclItemCond> {

  construct(owner : GL7LocSchedExclItemCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7LocSchedExclItemCond#GL7LocationSchedExclItem.PropertyInfo as ILinkPropertyInfo
  }
}