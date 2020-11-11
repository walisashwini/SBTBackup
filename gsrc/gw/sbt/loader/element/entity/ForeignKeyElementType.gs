package gw.sbt.loader.element.entity

uses gw.api.locale.DisplayKey
uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.artifacts.entities.ForeignKey
uses gw.sbt.loader.ArtifactLocation
uses gw.sbt.loader.stateupdate.Conflict
uses gw.sbt.util.XmlUtil

uses javax.xml.namespace.QName

class ForeignKeyElementType extends FieldElementType<ForeignKey> {
  override property get Description() : String {
    return "foreign key"
  }

  override function elementsFrom(entity : Entity) : List<ForeignKey> {
    return entity.ForeignKeys
  }

  override function conflictExistsBetween(currentElement : ForeignKey, incomingElement : ForeignKey) : boolean {
    return not XmlUtil.compareXmlElements(currentElement.Xml, incomingElement.Xml)
  }

  override function addElement(entity : Entity, element : ForeignKey) {
    entity.addForeignKey(element)
  }

  override function removeAllElementsOfTypeFrom(entity : Entity) {
    var qName = new QName(EntityExtension.NAMESPACE, "foreignkey")
    entity.Xml.removeChildren(qName)
  }

  override function conflictForNewElement(element : ForeignKey, location : ArtifactLocation) : Optional<Conflict> {
    if (element.NullOK == "true")
      return Optional.empty()
    else
      return Optional.of(Conflict.make(
          :location = location,
          :message = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.ForeignKeyConflictMessage",
              element.Name, location.Filename)))
  }
}