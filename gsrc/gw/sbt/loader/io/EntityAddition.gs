package gw.sbt.loader.io

uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.config.ConfigurationFile

class EntityAddition extends FileAddition<Entity> {

  construct(entity : Entity) {
    super(ConfigurationFile.entityFromExtensions(entity.EntityName + ".eti"), entity)
  }
}