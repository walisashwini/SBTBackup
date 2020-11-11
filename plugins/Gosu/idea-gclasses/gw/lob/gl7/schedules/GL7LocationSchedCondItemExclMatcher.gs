package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7LocationSchedCondItemExclMatcher extends AbstractExclusionMatcher<GL7LocSchedCondItemExcl> {

  construct(owner : GL7LocSchedCondItemExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7LocSchedCondItemExcl#GL7LocationSchedCondItem.PropertyInfo as ILinkPropertyInfo
  }
}