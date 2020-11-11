package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7SublineSchedExclMatcher extends AbstractExclusionMatcher<GL7SublineSchedExcl> {

  construct(owner : GL7SublineSchedExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7SublineSchedExcl#GL7Subline.PropertyInfo as ILinkPropertyInfo
  }

}