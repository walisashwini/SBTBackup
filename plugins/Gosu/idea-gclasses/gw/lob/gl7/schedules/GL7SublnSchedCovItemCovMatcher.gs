package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7SublnSchedCovItemCovMatcher extends AbstractCoverageMatcher<GL7SublnSchedCovItmCov> {

  construct(owner : GL7SublnSchedCovItmCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {
        GL7SublnSchedCovItmCov#GL7SublnSchedCovItem.PropertyInfo as ILinkPropertyInfo
    }
  }

}