package gw.lob.gl7

uses gw.lob.common.AbstractExclusionMatcher
uses gw.entity.ILinkPropertyInfo

class GL7UnmannedAircraftExclMatcher extends AbstractExclusionMatcher<GL7UnmannedAircraftExcl> {
  construct(owner : GL7UnmannedAircraftExcl) {
    super(owner)
  }

  override property get Parent() : ILinkPropertyInfo {
    return GL7UnmannedAircraftExcl#UnmannedAircraft.PropertyInfo as ILinkPropertyInfo
  }

}