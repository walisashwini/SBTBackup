package gw.lob.gl7
uses gw.lob.common.AbstractConditionMatcher
uses gw.entity.ILinkPropertyInfo

class GL7ExposureCondMatcher extends AbstractConditionMatcher<GL7ExposureCond> {
  construct(owner : GL7ExposureCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7ExposureCond#GL7Exposure.PropertyInfo as ILinkPropertyInfo
  }

}
