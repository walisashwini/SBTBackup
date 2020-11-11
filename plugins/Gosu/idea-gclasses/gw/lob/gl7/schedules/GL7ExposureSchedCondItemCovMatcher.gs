package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7ExposureSchedCondItemCovMatcher extends AbstractCoverageMatcher<GL7ExpSchedCondItemCov> {

  construct(owner : GL7ExpSchedCondItemCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {GL7ExpSchedCondItemCov#GL7ExposureSchedCondItem.PropertyInfo as ILinkPropertyInfo}
  }

}