package gw.sbt.loader.element.entity

uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.TypeKey
uses gw.sbt.loader.EntityElementHelper
uses gw.sbt.loader.EntityTypeKeyHelper

class TypeKeyElementType extends FieldElementType<TypeKey> {
  override property get Description() : String {
    return "typeKey"
  }

  override function elementsFrom(entity : Entity) : List<TypeKey> {
    return entity.TypeKeys
  }

  override function conflictExistsBetween(currentElement : TypeKey, incomingElement : TypeKey) : boolean {
    return not EntityTypeKeyHelper.compareTypeKeys(currentElement, incomingElement)
  }

  override function addElement(entity : Entity, element : TypeKey) {
    entity.addTypeKey(element)
  }

  override function removeAllElementsOfTypeFrom(entity : Entity) {
    new EntityElementHelper<TypeKey>().removeElementsByTypeFromEntity(entity)
  }
}