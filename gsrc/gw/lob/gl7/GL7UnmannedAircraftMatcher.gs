package gw.lob.gl7

uses gw.api.logicalmatch.AbstractEffDatedPropertiesMatcher
uses gw.entity.IEntityPropertyInfo
uses gw.entity.ILinkPropertyInfo

uses java.lang.Iterable

class GL7UnmannedAircraftMatcher extends AbstractEffDatedPropertiesMatcher<GL7UnmannedAircraft> {
  construct(owner : GL7UnmannedAircraft) {
    super(owner)
  }

  override property get IdentityColumns() : Iterable<IEntityPropertyInfo> {
    return {GL7UnmannedAircraft#PublicID.PropertyInfo as IEntityPropertyInfo}
  }

  override property get ParentColumns() : Iterable<ILinkPropertyInfo> {
    return {GL7UnmannedAircraft#Exposure.PropertyInfo as ILinkPropertyInfo}
  }
}