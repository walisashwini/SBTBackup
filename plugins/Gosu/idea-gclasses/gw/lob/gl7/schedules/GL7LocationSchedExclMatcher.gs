package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7LocationSchedExclMatcher extends AbstractExclusionMatcher<GL7LocationSchedExcl> {
  construct(owner : GL7LocationSchedExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7LocationSchedExcl#GL7Location.PropertyInfo as ILinkPropertyInfo
  }

}