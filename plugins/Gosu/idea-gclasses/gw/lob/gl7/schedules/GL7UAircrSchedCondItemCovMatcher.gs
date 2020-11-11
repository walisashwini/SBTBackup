package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7UAircrSchedCondItemCovMatcher extends AbstractCoverageMatcher<GL7UAircrSchedCondItemCov> {
  construct(owner : GL7UAircrSchedCondItemCov) {
    super(owner)
  }

  override property get CoverableColumns() :  List<ILinkPropertyInfo> {
    return {GL7UAircrSchedCondItemCov#UAircrSchedCondItem.PropertyInfo as ILinkPropertyInfo}
  }

}