package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7SublineTypeSchedCondItemExclMatcher extends AbstractExclusionMatcher<GL7SublnTypSchCondItmExcl> {

  construct(owner : GL7SublnTypSchCondItmExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7SublnTypSchCondItmExcl#GL7SublineTypeSchCondItem.PropertyInfo as ILinkPropertyInfo
  }
}