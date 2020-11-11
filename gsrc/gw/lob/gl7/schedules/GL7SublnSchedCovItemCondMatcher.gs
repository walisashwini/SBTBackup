package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7SublnSchedCovItemCondMatcher extends AbstractConditionMatcher<GL7SublnSchedCovItmCond> {
  construct(owner : GL7SublnSchedCovItmCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7SublnSchedCovItmCond#GL7SublnSchedCovItem.PropertyInfo as ILinkPropertyInfo
  }

}