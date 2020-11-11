package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7LocationSchedCovMatcher extends AbstractCoverageMatcher<GL7LocationSchedCov> {

  construct(owner : GL7LocationSchedCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {
        GL7LocationSchedCov#GL7Location.PropertyInfo as ILinkPropertyInfo
    }
  }

}