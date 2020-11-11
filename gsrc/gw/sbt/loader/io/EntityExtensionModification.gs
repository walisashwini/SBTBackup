package gw.sbt.loader.io

uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.config.ConfigurationFile

class EntityExtensionModification extends FileModification<EntityExtension> {
  construct(entityExtension : EntityExtension) {
    super(ConfigurationFile.entityFromExtensions(entityExtension.EntityName + ".etx"), entityExtension)
  }

  override function perform(writer : SBTUpdateLoaderWriter) {
    writer.writeEntity(this)
  }
}