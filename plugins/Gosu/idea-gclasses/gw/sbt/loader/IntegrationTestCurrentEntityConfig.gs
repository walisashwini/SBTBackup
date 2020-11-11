package gw.sbt.loader

uses gw.sbt.config.current.CurrentConfigContents

class IntegrationTestCurrentEntityConfig extends TypeSystemCurrentEntityConfig {
  var _testDataOnlyCurrentEntityConfig : TestDataOnlyCurrentEntityConfig

  construct(currentContents : CurrentConfigContents) {
    _testDataOnlyCurrentEntityConfig = new TestDataOnlyCurrentEntityConfig(currentContents)
  }

  override function locationOfField(entityName : String, fieldName : String) : Optional<ArtifactLocation> {
    return super.locationOfField(entityName, fieldName)
        .orGet(\-> _testDataOnlyCurrentEntityConfig.locationOfField(entityName, fieldName))
  }

  override function locationOfImplementsInterface(entityName : String, iface : String) : Optional<ArtifactLocation> {
    return super.locationOfImplementsInterface(entityName, iface)
        .orGet(\-> _testDataOnlyCurrentEntityConfig.locationOfImplementsInterface(entityName, iface))
  }

  override function locationOfImplementsEntity(entityName : String, name : String) : Optional<ArtifactLocation> {
    return super.locationOfImplementsEntity(entityName, name)
        .orGet(\-> _testDataOnlyCurrentEntityConfig.locationOfImplementsEntity(entityName, name))
  }
}
