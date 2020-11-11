package gw.sbt.loader.stateupdate

uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.loader.ArtifactLocation
uses gw.sbt.loader.element.Element
uses gw.sbt.loader.element.entity.ElementType

class EntityArtifact {
  var _location : ArtifactLocation as readonly Location
  var _content : Entity as readonly Content

  static function make(location : ArtifactLocation, content : Entity) : EntityArtifact {
    return new EntityArtifact(location, content)
  }

  construct(location : ArtifactLocation, content : Entity) {
    _location = location
    _content = content
  }

  property get EntityName() : String {
    return Content.EntityName
  }

  function elementsOfType(elementType : ElementType) : List<Element> {
    return elementType.elementsFrom(Content)
        .map(\ elementContent -> Element.make(elementType, elementContent, Location))
  }

  function removeAllElementsOfType(elementType : ElementType) {
    elementType.removeAllElementsOfTypeFrom(Content)
  }

  function copy() : EntityArtifact {
    return new EntityArtifact(_location, _content.copy())
  }
}