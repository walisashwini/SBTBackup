package gw.sbt.loader.element.entity

uses gw.sbt.artifacts.NamedXmlContent
uses gw.sbt.artifacts.entities.EntityArray
uses gw.sbt.artifacts.entities.EntityColumn
uses gw.sbt.artifacts.entities.EntityImplementsEntity
uses gw.sbt.artifacts.entities.EntityImplementsInterface
uses gw.sbt.artifacts.entities.ForeignKey
uses gw.sbt.artifacts.entities.TypeKey

class ElementTypeFactory {

  static function forContent(content : NamedXmlContent) : ElementType {
    switch (typeof content) {
      case EntityArray:
        return new ArrayElementType()
      case EntityColumn:
        return new ColumnElementType()
      case EntityImplementsInterface:
        return new ImplementsInterfaceElementType()
      case EntityImplementsEntity:
        return new ImplementsEntityElementType()
      case ForeignKey:
        return new ForeignKeyElementType()
      case TypeKey:
        return new TypeKeyElementType()
      default:
        throw new IllegalArgumentException("Cannot determine element type for content type '${typeof content}'")
    }
  }

  static property get AllElementTypes() : List<ElementType> {
    return {
        new ColumnElementType(),
        new ArrayElementType(),
        new TypeKeyElementType(),
        new ForeignKeyElementType(),
        new ImplementsInterfaceElementType(),
        new ImplementsEntityElementType()
    }
  }
}