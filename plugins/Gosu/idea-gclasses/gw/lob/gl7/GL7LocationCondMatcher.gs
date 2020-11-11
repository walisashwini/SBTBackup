package gw.lob.gl7
uses gw.lob.common.AbstractConditionMatcher
uses gw.entity.ILinkPropertyInfo

class GL7LocationCondMatcher extends AbstractConditionMatcher<GL7LocationCond> {
  construct(owner : GL7LocationCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7LocationCond#GL7Location.PropertyInfo as ILinkPropertyInfo
  }

}
