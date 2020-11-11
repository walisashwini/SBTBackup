package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7SublineTypeSchedCondItemCovMatcher extends AbstractCoverageMatcher<GL7SublnTypSchCondItmCov> {

  construct(owner : GL7SublnTypSchCondItmCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {
        GL7SublnTypSchCondItmCov#GL7SublineTypeSchCondItem.PropertyInfo as ILinkPropertyInfo
    }
  }

}