package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7LineSchedCovMatcher extends AbstractCoverageMatcher<GL7LineSchedCov> {

  construct(owner : GL7LineSchedCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {
        GL7LineSchedCov#GL7Line.PropertyInfo as ILinkPropertyInfo
    }
  }

}