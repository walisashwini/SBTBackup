package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7SublnSchedCondItemExclMatcher extends AbstractExclusionMatcher<GL7SublnSchedCondItmExcl> {

  construct(owner : GL7SublnSchedCondItmExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7SublnSchedCondItmExcl#GL7SublnSchedCondItem.PropertyInfo as ILinkPropertyInfo
  }
}