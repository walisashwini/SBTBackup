package gw.sbt.loader.element.entity

uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.artifacts.entities.EntityImplementsInterface
uses gw.sbt.loader.ArtifactLocation
uses gw.sbt.loader.CurrentEntityConfig

uses javax.xml.namespace.QName

class ImplementsInterfaceElementType implements ElementType<EntityImplementsInterface> {
  override property get Description() : String {
    return "implementsInterface"
  }

  override function elementsFrom(entity : Entity) : List<EntityImplementsInterface> {
    return entity.ImplementsInterfaces
  }

  override function conflictExistsBetween(
      currentElement : EntityImplementsInterface,
      incomingElement : EntityImplementsInterface
  ) : boolean {
    return false
  }

  override function addElement(entity : Entity, element : EntityImplementsInterface) {
    entity.addImplementsInterface(element)
  }

  override function removeAllElementsOfTypeFrom(entity : Entity) {
    var qName = new QName(EntityExtension.NAMESPACE, "implementsInterface")
    entity.Xml.removeChildren(qName)
  }

  override function currentConfigLocationOfElement(
      currentConfig : CurrentEntityConfig,
      entityName : String,
      elementName : String
  ) : Optional<ArtifactLocation> {
    return currentConfig.locationOfImplementsInterface(entityName, elementName)
  }
}