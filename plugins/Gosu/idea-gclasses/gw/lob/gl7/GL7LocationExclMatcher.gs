package gw.lob.gl7
uses gw.lob.common.AbstractExclusionMatcher
uses gw.entity.ILinkPropertyInfo

class GL7LocationExclMatcher extends AbstractExclusionMatcher<GL7LocationExcl> {
  construct(owner : GL7LocationExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7LocationExcl#GL7Location.PropertyInfo as ILinkPropertyInfo
  }

}
