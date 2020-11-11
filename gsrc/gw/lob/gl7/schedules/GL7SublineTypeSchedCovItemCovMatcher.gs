package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7SublineTypeSchedCovItemCovMatcher extends AbstractCoverageMatcher<GL7SublnTypSchCovItmCov> {

  construct(owner : GL7SublnTypSchCovItmCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {
        GL7SublnTypSchCovItmCov#GL7SublineTypeSchCovItem.PropertyInfo as ILinkPropertyInfo
    }
  }

}