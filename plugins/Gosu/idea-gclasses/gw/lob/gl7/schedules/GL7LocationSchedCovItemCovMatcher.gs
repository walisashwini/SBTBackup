package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7LocationSchedCovItemCovMatcher extends AbstractCoverageMatcher<GL7LocSchedCovItemCov> {

  construct(owner : GL7LocSchedCovItemCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {GL7LocSchedCovItemCov#GL7LocationSchedCovItem.PropertyInfo as ILinkPropertyInfo}
  }

}