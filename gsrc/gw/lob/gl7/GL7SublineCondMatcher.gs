package gw.lob.gl7

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7SublineCondMatcher extends AbstractConditionMatcher<GL7SublineCond> {

  construct(owner : GL7SublineCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7SublineCond#GL7Subline.PropertyInfo as ILinkPropertyInfo
  }

}