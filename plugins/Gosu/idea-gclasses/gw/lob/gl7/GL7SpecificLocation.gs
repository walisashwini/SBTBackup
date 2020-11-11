package gw.lob.gl7

uses gw.api.domain.LineSpecificLocation
uses gw.api.domain.LineSpecificBuilding

class GL7SpecificLocation implements LineSpecificLocation {
  var _location : GL7Location

  construct(location : GL7Location) {
    _location = location
  }

  override property get PolicyLocation() : PolicyLocation {
    return _location.Location
  }

  override property set PolicyLocation(location : PolicyLocation) {
    _location.Location = location
  }

  override property get UnusedBuildings() : entity.Building[] {
    return {}
  }

  override property get LineSpecificBuildings() : LineSpecificBuilding[] {
    return {}
  }

  override function addNewLineSpecificBuilding() : LineSpecificBuilding {
    return null
  }

  override function addToLineSpecificBuildings(building : entity.Building) : LineSpecificBuilding {
    return null
  }

  override function addToLineSpecificBuildings(building : LineSpecificBuilding) {
  }

  override function removeFromLineSpecificBuildings(building : LineSpecificBuilding) {
  }

  override property get TerritoryCode() : entity.TerritoryCode {
    return null
  }
}