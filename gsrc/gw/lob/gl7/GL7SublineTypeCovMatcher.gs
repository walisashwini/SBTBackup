package gw.lob.gl7

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7SublineTypeCovMatcher extends AbstractCoverageMatcher<GL7SublineTypeCov> {

  construct(owner : GL7SublineTypeCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return {GL7SublineTypeCov#GL7SublineType.PropertyInfo as ILinkPropertyInfo}
  }

}