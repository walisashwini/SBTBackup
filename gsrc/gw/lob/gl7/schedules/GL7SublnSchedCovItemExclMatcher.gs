package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7SublnSchedCovItemExclMatcher extends AbstractExclusionMatcher<GL7SublnSchedCovItmExcl> {

  construct(owner : GL7SublnSchedCovItmExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7SublnSchedCovItmExcl#GL7SublnSchedCovItem.PropertyInfo as ILinkPropertyInfo
  }

}