package gw.lob.gl7

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7LineCondMatcher extends AbstractConditionMatcher<GL7LineCond> {

  construct(owner : GL7LineCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7LineCond#GL7Line.PropertyInfo as ILinkPropertyInfo
  }

}