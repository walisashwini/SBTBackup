package gw.lob.gl7

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7SublineCovMatcher extends AbstractCoverageMatcher<GL7SublineCov> {

  construct(owner : GL7SublineCov) {
    super(owner)
  }

  override property get CoverableColumns() : List<ILinkPropertyInfo> {
    return { GL7SublineCov#GL7Subline.PropertyInfo as ILinkPropertyInfo }
  }

}