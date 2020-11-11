package gw.sbt.loader.io

uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.config.ConfigurationFile

class EntityStateExtensionModification extends FileAddition<EntityExtension> {

  construct(entityExtension : EntityExtension) {
    super(ConfigurationFile.entityFromExtensions(entityExtension.EntityName + ".state.etx"), entityExtension)
  }

  override function perform(writer : SBTUpdateLoaderWriter) {
    writer.writeEntity(this)
  }
}