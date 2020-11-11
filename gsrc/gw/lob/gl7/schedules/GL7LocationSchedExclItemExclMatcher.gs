package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7LocationSchedExclItemExclMatcher extends AbstractExclusionMatcher<GL7LocSchedExclItemExcl> {

  construct(owner : GL7LocSchedExclItemExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7LocSchedExclItemExcl#GL7LocationSchedExclItem.PropertyInfo as ILinkPropertyInfo
  }
}