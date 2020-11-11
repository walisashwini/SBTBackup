package gw.sbt.loader.element.entity

uses gw.sbt.artifacts.NamedXmlContent
uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.loader.ArtifactLocation
uses gw.sbt.loader.CurrentEntityConfig
uses gw.sbt.loader.element.Element
uses gw.sbt.loader.element.ElementChange
uses gw.sbt.loader.stateupdate.Conflict

interface ElementType<T extends NamedXmlContent> {
  property get Description() : String
  function elementsFrom(entity : Entity) : List<T>
  function conflictExistsBetween(currentElement : T, incomingElement : T) : boolean
  function addElement(entity : Entity, element : T)
  function removeAllElementsOfTypeFrom(entity : Entity)
  function currentConfigLocationOfElement(
      currentConfig : CurrentEntityConfig,
      entityName : String,
      elementName : String
  ) : Optional<ArtifactLocation>

  /**
   * By default, return nothing; for most element types, new elements never cause conflicts.
   */
  function conflictForNewElement(element : T, location : ArtifactLocation) : Optional<Conflict> {
    return Optional.empty()
  }

  /**
   * Return an ElementChange object representing the the change in content between the new and current versions of an
   * element. This method should be called only when no conflicts have been detected, making it safe to update the
   * content.
   *
   * By default, return nothing; for most element types, the matching element is either identical or has a conflicting
   * difference.
   */
  function changeForExistingElement(incomingElement : Element<T>, currentElement : Element<T>)
      : Optional<ElementChange> {
    return Optional.empty()
  }
}