package gw.lob.gl7

uses gw.lob.common.AbstractConditionMatcher
uses gw.entity.ILinkPropertyInfo

class GL7UnmannedAircraftCondMatcher extends AbstractConditionMatcher<GL7UnmannedAircraftCond> {
  construct(owner : GL7UnmannedAircraftCond) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7UnmannedAircraftCond#UnmannedAircraft.PropertyInfo as ILinkPropertyInfo
  }

}