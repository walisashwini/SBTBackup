package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7LocationSchedCondMatcher extends AbstractConditionMatcher<GL7LocationSchedCond> {
  construct(owner : GL7LocationSchedCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7LocationSchedCond#GL7Location.PropertyInfo as ILinkPropertyInfo
  }
}