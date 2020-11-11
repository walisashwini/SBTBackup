package gw.lob.gl7

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7LineExclMatcher extends AbstractExclusionMatcher<GL7LineExcl> {

  construct(owner : GL7LineExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7LineExcl#GL7Line.PropertyInfo as ILinkPropertyInfo
  }

}