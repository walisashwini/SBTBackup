package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7SublineTypeSchedExclMatcher extends AbstractExclusionMatcher<GL7SublineTypeSchedExcl> {

  construct(owner : GL7SublineTypeSchedExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7SublineTypeSchedExcl#GL7SublineType.PropertyInfo as ILinkPropertyInfo
  }

}