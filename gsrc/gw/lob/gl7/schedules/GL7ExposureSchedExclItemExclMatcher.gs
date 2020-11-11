package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7ExposureSchedExclItemExclMatcher extends AbstractExclusionMatcher<GL7ExpSchedExclItemExcl> {

  construct(owner : GL7ExpSchedExclItemExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7ExpSchedExclItemExcl#GL7ExposureSchedExclItem.PropertyInfo as ILinkPropertyInfo
  }
}