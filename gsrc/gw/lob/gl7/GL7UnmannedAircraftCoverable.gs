package gw.lob.gl7

class GL7UnmannedAircraftCoverable extends GL7AbstractCoverable <GL7UnmannedAircraft>{
  construct(owner : GL7UnmannedAircraft) {
    super(owner)
  }

  override property get SublineTypeName(): String {
    return _owner.Exposure.SublineTypeName
  }
}