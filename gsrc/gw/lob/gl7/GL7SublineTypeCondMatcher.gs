package gw.lob.gl7

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7SublineTypeCondMatcher extends AbstractConditionMatcher<GL7SublineTypeCond> {

  construct(owner : GL7SublineTypeCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7SublineTypeCond#GL7SublineType.PropertyInfo as ILinkPropertyInfo
  }

}