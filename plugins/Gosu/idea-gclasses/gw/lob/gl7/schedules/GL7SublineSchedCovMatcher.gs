package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7SublineSchedCovMatcher extends AbstractCoverageMatcher<GL7SublineSchedCov> {

  construct(owner : GL7SublineSchedCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {
        GL7SublineSchedCov#GL7Subline.PropertyInfo as ILinkPropertyInfo
    }
  }

}