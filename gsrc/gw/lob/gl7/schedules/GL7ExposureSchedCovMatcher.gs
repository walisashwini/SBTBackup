package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7ExposureSchedCovMatcher extends AbstractCoverageMatcher<GL7ExposureSchedCov> {

  construct(owner : GL7ExposureSchedCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {
        GL7ExposureSchedCov#GL7Exposure.PropertyInfo as ILinkPropertyInfo
    }
  }

}