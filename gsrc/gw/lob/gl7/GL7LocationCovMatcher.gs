package gw.lob.gl7
uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7LocationCovMatcher extends AbstractCoverageMatcher<GL7LocationCov> {
  construct(owner : GL7LocationCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {GL7LocationCov#GL7Location.PropertyInfo as ILinkPropertyInfo}
  }

}
