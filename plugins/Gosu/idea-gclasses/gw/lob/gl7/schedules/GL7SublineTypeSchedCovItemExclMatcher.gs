package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7SublineTypeSchedCovItemExclMatcher extends AbstractExclusionMatcher<GL7SublnTypSchCovItmExcl> {

  construct(owner : GL7SublnTypSchCovItmExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7SublnTypSchCovItmExcl#GL7SublineTypeSchCovItem.PropertyInfo as ILinkPropertyInfo
  }
}