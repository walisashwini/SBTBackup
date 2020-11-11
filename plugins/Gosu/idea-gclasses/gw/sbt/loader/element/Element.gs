package gw.sbt.loader.element

uses gw.sbt.artifacts.NamedXmlContent
uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.loader.ArtifactLocation
uses gw.sbt.loader.element.entity.ElementType

class Element<T extends NamedXmlContent> {
  var _elementType : ElementType as readonly ElementType
  var _content : T as readonly Content
  var _location : ArtifactLocation as readonly Location

  static reified function make<U extends NamedXmlContent>(
      elementType : ElementType,
      content : U,
      location : ArtifactLocation
  ) : Element<U> {
    return new Element<U>(elementType, content, location)
  }

  construct(elementType : ElementType, content : T, location : ArtifactLocation) {
    _elementType = elementType
    _content = content
    _location = location
  }

  property get Name() : String {
    return Content.Name
  }

  property get Filename() : String {
    return Location?.Filename
  }

  property get Exists() : boolean {
    return Location != null
  }

  function addTo(entity : Entity) {
    _elementType.addElement(entity, Content)
  }

  function conflictsWith(existingElement : Element<T>) : boolean {
    return ElementType.conflictExistsBetween(existingElement.Content, Content)
  }
}