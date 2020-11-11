package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7ExposureSchedCovItemCovMatcher extends AbstractCoverageMatcher<GL7ExpSchedCovItemCov> {

  construct(owner : GL7ExpSchedCovItemCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {GL7ExpSchedCovItemCov#GL7ExposureSchedCovItem.PropertyInfo as ILinkPropertyInfo}
  }

}