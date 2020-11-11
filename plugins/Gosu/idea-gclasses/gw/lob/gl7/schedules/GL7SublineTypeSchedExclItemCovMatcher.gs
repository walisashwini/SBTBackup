package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7SublineTypeSchedExclItemCovMatcher extends AbstractCoverageMatcher<GL7SublnTypSchExclItmCov> {

  construct(owner : GL7SublnTypSchExclItmCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {
        GL7SublnTypSchExclItmCov#GL7SublineTypeSchExclItem.PropertyInfo as ILinkPropertyInfo
    }
  }

}