package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7LocationSchedCondItemCovMatcher extends AbstractCoverageMatcher<GL7LocSchedCondItemCov> {

  construct(owner : GL7LocSchedCondItemCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {GL7LocSchedCondItemCov#GL7LocationSchedCondItem.PropertyInfo as ILinkPropertyInfo}
  }

}