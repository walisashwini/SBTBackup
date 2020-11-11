package gw.sbt.loader.element

uses gw.lang.reflect.features.PropertyReference
uses gw.sbt.loader.ArtifactLocation
uses gw.sbt.pca.ValueObject

class ElementChange extends ValueObject {
  var _element : Element as readonly Element
  var _message : String as readonly Message

  static function make(element : Element, message : String) : ElementChange {
    return new ElementChange(element, message)
  }

  private construct(element : Element, message : String) {
    _element = element
    _message = message
  }

  protected override property get ValueProperties() : List<PropertyReference<Object, Object>> {
    return { #Location, #Message }
  }

  property get Location() : ArtifactLocation {
    return Element.Location
  }
}