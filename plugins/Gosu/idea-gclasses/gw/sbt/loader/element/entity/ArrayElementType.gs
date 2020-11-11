package gw.sbt.loader.element.entity

uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.EntityArray
uses gw.sbt.loader.EntityArrayHelper
uses gw.sbt.loader.EntityElementHelper

class ArrayElementType extends FieldElementType<EntityArray> {
  override property get Description() : String {
    return "array"
  }

  override function elementsFrom(entity : Entity) : List<EntityArray> {
    return entity.Arrays
  }

  override function conflictExistsBetween(currentElement : EntityArray, incomingElement : EntityArray) : boolean {
    return not EntityArrayHelper.compareArrays(currentElement, incomingElement)
  }

  override function addElement(entity : Entity, element : EntityArray) {
    entity.addArray(element)
  }

  override function removeAllElementsOfTypeFrom(entity : Entity) {
    new EntityElementHelper<EntityArray>().removeElementsByTypeFromEntity(entity)
  }
}