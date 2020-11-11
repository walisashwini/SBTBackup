package gw.sbt.loader.io

uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.config.ConfigurationFile

class EntityExtensionAddition extends FileAddition<EntityExtension> {

  construct(entityExtension : EntityExtension) {
    super(ConfigurationFile.entityFromExtensions(entityExtension.EntityName + ".etx"), entityExtension)
  }

}
