package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7UAircrSchedCovItemCovMatcher extends AbstractCoverageMatcher<GL7UAircrSchedCovItemCov> {
  construct(owner : GL7UAircrSchedCovItemCov) {
    super(owner)
  }

  override property get CoverableColumns() :  List<ILinkPropertyInfo> {
    return {GL7UAircrSchedCovItemCov#UAircrSchedCovItem.PropertyInfo as ILinkPropertyInfo}
  }

}