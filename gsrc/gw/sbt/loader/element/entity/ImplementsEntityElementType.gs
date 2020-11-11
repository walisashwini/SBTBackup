package gw.sbt.loader.element.entity

uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.artifacts.entities.EntityImplementsEntity
uses gw.sbt.loader.ArtifactLocation
uses gw.sbt.loader.CurrentEntityConfig

uses javax.xml.namespace.QName


class ImplementsEntityElementType implements ElementType<EntityImplementsEntity> {
  override property get Description() : String {
    return "implementsEntity"
  }

  override function elementsFrom(entity : Entity) : List<EntityImplementsEntity> {
    return entity.ImplementsEntitys
  }

  override function conflictExistsBetween(
      currentElement : EntityImplementsEntity,
      incomingElement : EntityImplementsEntity
  ) : boolean {
    return false
  }

  override function addElement(entity : Entity, element : EntityImplementsEntity) {
    entity.addImplementsEntity(element)
  }

  override function removeAllElementsOfTypeFrom(entity : Entity) {
    var qName = new QName(EntityExtension.NAMESPACE, "implementsEntity")
    entity.Xml.removeChildren(qName)
  }

  override function currentConfigLocationOfElement(
      currentConfig : CurrentEntityConfig,
      entityName : String,
      elementName : String
  ) : Optional<ArtifactLocation> {
    return currentConfig.locationOfImplementsEntity(entityName, elementName)
  }
}