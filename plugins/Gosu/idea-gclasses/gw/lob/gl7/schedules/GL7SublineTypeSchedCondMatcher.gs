package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7SublineTypeSchedCondMatcher extends AbstractConditionMatcher<GL7SublineTypeSchedCond> {

  construct(owner : GL7SublineTypeSchedCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7SublineTypeSchedCond#GL7SublineType.PropertyInfo as ILinkPropertyInfo
  }

}