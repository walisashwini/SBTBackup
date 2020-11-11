package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7LocationSchedExclItemCovMatcher extends AbstractCoverageMatcher<GL7LocSchedExclItemCov> {

  construct(owner : GL7LocSchedExclItemCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {GL7LocSchedExclItemCov#GL7LocationSchedExclItem.PropertyInfo as ILinkPropertyInfo}
  }

}