package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7SublineTypeSchedExclItemExclMatcher extends AbstractExclusionMatcher<GL7SublnTypSchExclItmExcl> {

  construct(owner : GL7SublnTypSchExclItmExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7SublnTypSchExclItmExcl#GL7SublineTypeSchExclItem.PropertyInfo as ILinkPropertyInfo
  }
}