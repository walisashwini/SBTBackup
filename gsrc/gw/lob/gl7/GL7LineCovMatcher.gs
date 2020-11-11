package gw.lob.gl7

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7LineCovMatcher extends AbstractCoverageMatcher<GL7LineCov> {

  construct(owner : GL7LineCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {GL7LineCov#GL7Line.PropertyInfo as ILinkPropertyInfo}
  }

}