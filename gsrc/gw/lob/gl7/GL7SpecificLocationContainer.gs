package gw.lob.gl7

uses gw.api.domain.LineSpecificLocation
uses gw.lob.common.LineSpecificLocationContainerBase
uses gw.lob.common.LobPropertyService
uses gw.lob.gl7.synchronizer.GL7LocationSynchronizer

class GL7SpecificLocationContainer extends LineSpecificLocationContainerBase<GL7Location> {
  var _subline: entity.GL7SublineType

  construct(line : entity.GL7SublineType) {
    super(line)
    _subline = line
  }

  override property get Period() : PolicyPeriod {
    return _subline.Branch
  }

  override property get LineSpecificLocations() : LineSpecificLocation[] {
    return _subline.Locations
  }

  override function addToLineSpecificLocations(location : LineSpecificLocation) {
    var glLocation = location as GL7Location
    _subline.addAndNumberLocation(glLocation)
    LobPropertyService.Instance.initializeCoverable(glLocation)
    new GL7LocationSynchronizer(glLocation).syncAll()
  }

  override function removeFromLineSpecificLocations(location : LineSpecificLocation) {
    var glLocation = location as GL7Location
    _subline.removeAndRenumberLocation(glLocation)
  }
}