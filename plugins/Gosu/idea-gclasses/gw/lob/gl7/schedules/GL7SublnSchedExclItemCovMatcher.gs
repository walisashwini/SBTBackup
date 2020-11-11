package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7SublnSchedExclItemCovMatcher extends AbstractCoverageMatcher<GL7SublnSchedExclItmCov> {

  construct(owner : GL7SublnSchedExclItmCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {
        GL7SublnSchedExclItmCov#GL7SublnSchedExclItem.PropertyInfo as ILinkPropertyInfo
    }
  }

}