package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7SublineSchedCondMatcher extends AbstractConditionMatcher<GL7SublineSchedCond> {

  construct(owner : GL7SublineSchedCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7SublineSchedCond#GL7Subline.PropertyInfo as ILinkPropertyInfo
  }

}