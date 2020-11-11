package gw.sbt.loader.io

uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.config.ConfigurationFile

class EntityLineExtensionAddition extends FileAddition<EntityExtension> {

  construct(entityExtension : EntityExtension, lineCode : String) {
    super(ConfigurationFile.entityFromExtensions(entityExtension.EntityName + "." + lineCode.toUpperCase() +".etx"), entityExtension)
  }
}