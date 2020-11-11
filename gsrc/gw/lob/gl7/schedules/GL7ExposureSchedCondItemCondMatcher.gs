package gw.lob.gl7.schedules

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractConditionMatcher

class GL7ExposureSchedCondItemCondMatcher extends AbstractConditionMatcher<GL7ExpSchedCondItemCond> {

  construct(owner : GL7ExpSchedCondItemCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return  GL7ExpSchedCondItemCond#GL7ExposureSchedCondItem.PropertyInfo as ILinkPropertyInfo
  }
}