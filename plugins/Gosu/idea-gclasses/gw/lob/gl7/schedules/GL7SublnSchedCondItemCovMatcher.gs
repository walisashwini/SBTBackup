package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7SublnSchedCondItemCovMatcher extends AbstractCoverageMatcher<GL7SublnSchedCondItmCov> {

  construct(owner : GL7SublnSchedCondItmCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {
        GL7SublnSchedCondItmCov#GL7SublnSchedCondItem.PropertyInfo as ILinkPropertyInfo
    }
  }

}