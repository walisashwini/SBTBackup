package gw.lob.gl7

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7SublineTypeExclMatcher extends AbstractExclusionMatcher<GL7SublineTypeExcl> {

  construct(owner : GL7SublineTypeExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7SublineTypeExcl#GL7SublineType.PropertyInfo as ILinkPropertyInfo
  }

}