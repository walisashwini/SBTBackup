package gw.sbt.loader

uses gw.sbt.config.ConfigurationFile

class  ArtifactLocation {
  var _filename : String as readonly Filename

  private construct(filename : String) {
    assert filename != null
    _filename = filename
  }

  static function forFilename(filename : String) : ArtifactLocation {
    return new ArtifactLocation(filename)
  }

  static function fromConfigurationFile(file : ConfigurationFile) : ArtifactLocation {
    return forFilename(file.Name)
  }

  function isStateEtxFor(entityName : String) : boolean {
    return "${entityName}.state.etx" == Filename
  }

  function isCountrywideEtxFor(entityName : String) : boolean {
    return "${entityName}.etx" == Filename
  }

  property get IsEti() : boolean {
    return Filename.endsWith(".eti")
  }

  property get IsEtx() : boolean {
    return Filename.endsWith(".etx")
  }

  property get IsStateEtx() : boolean {
    return Filename.endsWith(".state.etx")
  }

  property get IsCALineEtx() : boolean {
    return Filename.endsWith(".CA.etx")
  }

  property get IsAULineEtx() : boolean {
    return Filename.endsWith(".AU.etx")
  }

  property get IsCountrywideEtx() : boolean {
    return IsEtx and not IsStateEtx and not IsCALineEtx and not IsAULineEtx
  }

  property get IsEntity() : boolean {
    return IsEti or IsCountrywideEtx or IsStateEtx or IsCALineEtx or IsAULineEtx
  }

  override function equals(other : Object) : boolean {
    return other typeis ArtifactLocation and other.Filename == Filename
  }

  override function hashCode() : int {
    return Filename == null ? 0 : Filename.hashCode()
  }

  override function toString() : String {
    return "${Class.SimpleName}(${Filename})"
  }
}