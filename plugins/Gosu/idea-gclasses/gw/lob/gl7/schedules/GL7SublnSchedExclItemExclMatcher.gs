package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7SublnSchedExclItemExclMatcher extends AbstractExclusionMatcher<GL7SublnSchedExclItmExcl> {

  construct(owner : GL7SublnSchedExclItmExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7SublnSchedExclItmExcl#GL7SublnSchedExclItem.PropertyInfo as ILinkPropertyInfo
  }

}