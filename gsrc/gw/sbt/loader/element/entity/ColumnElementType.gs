package gw.sbt.loader.element.entity

uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.EntityColumn
uses gw.sbt.loader.EntityColumnHelper
uses gw.sbt.loader.EntityElementHelper
uses gw.sbt.loader.element.Element
uses gw.sbt.loader.element.ElementChange

class ColumnElementType extends FieldElementType<EntityColumn> {
  override property get Description() : String {
    return "column"
  }

  override function elementsFrom(entity : Entity) : List<EntityColumn> {
    return entity.Columns
  }

  override function conflictExistsBetween(currentElement : EntityColumn, incomingElement : EntityColumn) : boolean {
    return not EntityColumnHelper.compareColumnIgnoringSizes(incomingElement, currentElement)
  }

  override function addElement(entity : Entity, element : EntityColumn) {
    entity.addColumn(element)
  }

  override function removeAllElementsOfTypeFrom(entity : Entity) {
    new EntityElementHelper<EntityColumn>().removeElementsByTypeFromEntity(entity)
  }

  override function changeForExistingElement(
      incomingElement : Element<EntityColumn>,
      currentElement : Element<EntityColumn>
  ) : Optional<ElementChange> {
    if (EntityColumnHelper.compareColumnSizes(incomingElement.Content, currentElement.Content) ==
        EntityColumnHelper.ColumnSizeComparisonOutCome.WIDER_COLUMN_SIZE) {
      return Optional.of(ElementChange.make(
          :element = Element.make(this, incomingElement.Content, currentElement.Location),
          :message = "The size of column: ${currentElement.Name} in the entity ${currentElement.Location.Filename} has "
              + "been increased from ${currentElement.Content.DisplaySize} to ${incomingElement.Content.DisplaySize}"))
    } else {
      return Optional.empty()
    }
  }
}