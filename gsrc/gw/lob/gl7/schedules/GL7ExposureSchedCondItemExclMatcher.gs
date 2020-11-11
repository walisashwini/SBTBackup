package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractExclusionMatcher

class GL7ExposureSchedCondItemExclMatcher extends AbstractExclusionMatcher<GL7ExpSchedCondItemExcl> {

  construct(owner : GL7ExpSchedCondItemExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7ExpSchedCondItemExcl#GL7ExposureSchedCondItem.PropertyInfo as ILinkPropertyInfo
  }
}