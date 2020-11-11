package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7LocationSchedCovItemCondMatcher extends AbstractConditionMatcher<GL7LocSchedCovItemCond> {

  construct(owner : GL7LocSchedCovItemCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7LocSchedCovItemCond#GL7LocationSchedCovItem.PropertyInfo as ILinkPropertyInfo
  }
}