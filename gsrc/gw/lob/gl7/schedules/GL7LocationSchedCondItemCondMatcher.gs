package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7LocationSchedCondItemCondMatcher extends AbstractConditionMatcher<GL7LocSchedCondItemCond> {

  construct(owner : GL7LocSchedCondItemCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7LocSchedCondItemCond#GL7LocationSchedCondItem.PropertyInfo as ILinkPropertyInfo
  }
}