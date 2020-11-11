package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7ExposureSchedExclItemCovMatcher extends AbstractCoverageMatcher<GL7ExpSchedExclItemCov> {

  construct(owner : GL7ExpSchedExclItemCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {GL7ExpSchedExclItemCov#GL7ExposureSchedExclItem.PropertyInfo as ILinkPropertyInfo}
  }

}