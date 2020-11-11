package gw.lob.gl7
uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7ExposureCovMatcher extends AbstractCoverageMatcher<GL7ExposureCov> {
  construct(owner : GL7ExposureCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {GL7ExposureCov#GL7Exposure.PropertyInfo as ILinkPropertyInfo}
  }

}
