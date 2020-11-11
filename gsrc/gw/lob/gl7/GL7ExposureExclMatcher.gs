package gw.lob.gl7
uses gw.lob.common.AbstractExclusionMatcher
uses gw.entity.ILinkPropertyInfo

class GL7ExposureExclMatcher extends AbstractExclusionMatcher<GL7ExposureExcl> {
  construct(owner : GL7ExposureExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7ExposureExcl#GL7Exposure.PropertyInfo as ILinkPropertyInfo
  }

}
