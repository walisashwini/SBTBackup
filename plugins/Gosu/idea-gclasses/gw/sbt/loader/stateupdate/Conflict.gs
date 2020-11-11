package gw.sbt.loader.stateupdate

uses gw.lang.reflect.features.PropertyReference
uses gw.sbt.loader.ArtifactLocation
uses gw.sbt.pca.ValueObject

class Conflict extends ValueObject {
  var _location : ArtifactLocation as readonly Location
  var _message : String as readonly Message

  static function make(location : ArtifactLocation, message : String) : Conflict {
    return new Conflict(location, message)
  }

  private construct(location : ArtifactLocation, message : String) {
    _location = location
    _message = message
  }

  protected override property get ValueProperties() : List<PropertyReference<Object, Object>> {
    return { #Location, #Message }
  }
}