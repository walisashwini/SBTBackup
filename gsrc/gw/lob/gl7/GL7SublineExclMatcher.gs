package gw.lob.gl7

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7SublineExclMatcher extends AbstractExclusionMatcher<GL7SublineExcl> {

  construct(owner : GL7SublineExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7SublineExcl#GL7Subline.PropertyInfo as ILinkPropertyInfo
  }

}