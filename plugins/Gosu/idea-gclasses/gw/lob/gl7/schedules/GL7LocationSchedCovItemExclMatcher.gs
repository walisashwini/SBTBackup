package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7LocationSchedCovItemExclMatcher extends AbstractExclusionMatcher<GL7LocSchedCovItemExcl> {

  construct(owner : GL7LocSchedCovItemExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7LocSchedCovItemExcl#GL7LocationSchedCovItem.PropertyInfo as ILinkPropertyInfo
  }
}