package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7LineSchedExclMatcher extends AbstractExclusionMatcher<GL7LineSchedExcl> {

  construct(owner : GL7LineSchedExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7LineSchedExcl#GL7Line.PropertyInfo as ILinkPropertyInfo
  }

}