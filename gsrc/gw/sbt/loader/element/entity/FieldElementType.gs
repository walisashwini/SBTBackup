package gw.sbt.loader.element.entity

uses gw.sbt.artifacts.NamedXmlContent
uses gw.sbt.loader.ArtifactLocation
uses gw.sbt.loader.CurrentEntityConfig

abstract class FieldElementType<T extends NamedXmlContent> implements ElementType<T> {

  override function currentConfigLocationOfElement(
      currentConfig : CurrentEntityConfig,
      entityName : String,
      elementName : String
  ) : Optional<ArtifactLocation> {
    return currentConfig.locationOfField(entityName, elementName)
  }
}