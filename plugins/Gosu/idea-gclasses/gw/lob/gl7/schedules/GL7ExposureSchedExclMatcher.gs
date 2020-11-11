package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7ExposureSchedExclMatcher extends AbstractExclusionMatcher<GL7ExposureSchedExcl> {
  construct(owner : GL7ExposureSchedExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7ExposureSchedExcl#GL7Exposure.PropertyInfo as ILinkPropertyInfo
  }

}