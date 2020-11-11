package gw.sbt.loader

interface CurrentEntityConfig {

  function locationOfField(entityName : String, fieldName : String) : Optional<ArtifactLocation>

  function locationOfImplementsInterface(entityName : String, iface : String) : Optional<ArtifactLocation>

  function locationOfImplementsEntity(entityName : String, name : String) : Optional<ArtifactLocation>

  function fieldExists(entityName : String, fieldName : String) : boolean {
    return locationOfField(entityName, fieldName).isPresent()
  }
}