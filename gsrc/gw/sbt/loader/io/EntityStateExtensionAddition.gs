package gw.sbt.loader.io

uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.config.ConfigurationFile

class EntityStateExtensionAddition extends FileAddition<EntityExtension> {

  construct(entityExtension : EntityExtension) {
    super(ConfigurationFile.entityFromExtensions(entityExtension.EntityName + ".state.etx"), entityExtension)
  }
}