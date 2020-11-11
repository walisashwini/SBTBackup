package gw.lob.gl7.schedules

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7SublineTypeSchedCovMatcher extends AbstractCoverageMatcher<GL7SublineTypeSchedCov> {

  construct(owner : GL7SublineTypeSchedCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {
        GL7SublineTypeSchedCov#GL7SublineType.PropertyInfo as ILinkPropertyInfo
    }
  }

}