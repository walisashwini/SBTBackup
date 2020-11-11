package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7LineSchedCondMatcher extends AbstractConditionMatcher<GL7LineSchedCond> {

  construct(owner : GL7LineSchedCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7LineSchedCond#GL7Line.PropertyInfo as ILinkPropertyInfo
  }

}