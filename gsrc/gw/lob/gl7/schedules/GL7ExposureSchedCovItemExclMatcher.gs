package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7ExposureSchedCovItemExclMatcher extends AbstractExclusionMatcher<GL7ExpSchedCovItemExcl> {

  construct(owner : GL7ExpSchedCovItemExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7ExpSchedCovItemExcl#GL7ExposureSchedCovItem.PropertyInfo as ILinkPropertyInfo
  }
}