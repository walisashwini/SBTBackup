package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7UAircrSchedExclItemCovMatcher extends AbstractCoverageMatcher<GL7UAircrSchedExclItemCov> {
  construct(owner : GL7UAircrSchedExclItemCov) {
    super(owner)
  }

  override property get CoverableColumns() :  List<ILinkPropertyInfo> {
    return {GL7UAircrSchedExclItemCov#UAircrSchedExclItem.PropertyInfo as ILinkPropertyInfo}
  }

}