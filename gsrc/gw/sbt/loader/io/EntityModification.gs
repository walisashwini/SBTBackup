package gw.sbt.loader.io

uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.config.ConfigurationFile

class EntityModification extends FileModification<Entity> {

  construct(entity : Entity) {
    super(ConfigurationFile.entityFromExtensions(entity.EntityName + ".eti"), entity)
  }

  override function perform(writer : SBTUpdateLoaderWriter) {
    writer.writeEntity(this)
  }
}