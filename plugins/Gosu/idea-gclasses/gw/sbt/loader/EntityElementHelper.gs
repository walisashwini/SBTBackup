package gw.sbt.loader

uses gw.sbt.artifacts.NamedXmlContent
uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.EntityArray
uses gw.sbt.artifacts.entities.EntityColumn
uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.artifacts.entities.TypeKey
uses gw.sbt.util.LoadHelper

uses javax.xml.namespace.QName

class EntityElementHelper<T extends NamedXmlContent> extends LoadHelper {
  static var _elementTypes = { EntityColumn, EntityArray, TypeKey }

  var _currentEntityConfig : CurrentEntityConfig

  construct(currentEntityConfig : CurrentEntityConfig = null) {
    _currentEntityConfig = currentEntityConfig ?: new TypeSystemCurrentEntityConfig()
  }

  static reified function forElementType<E extends NamedXmlContent>(elementType : Type<E>) : EntityElementHelper<E> {
    if (not _elementTypes.contains(elementType))
      throw new IllegalArgumentException("Unsupported element type: '${elementType}")
    return new EntityElementHelper<E>()
  }

  static function forEachElementType(callback(helper : EntityElementHelper)) {
    // Iterating over _elementTypes doesn't work, because generic type information is lost.
    callback(forElementType(EntityColumn))
    callback(forElementType(EntityArray))
    callback(forElementType(TypeKey))
  }

  static function getElementId(elem : NamedXmlContent) : String {
    return elem.Name
  }

  function elementExistsInTypeSystem(entityName : String, elemName : String) : boolean {
    if ({ EntityColumn, EntityArray, TypeKey }.contains(T.Type))
      return _currentEntityConfig.fieldExists(entityName, elemName)
    else
      throw "Unsupported element type: '" + T.Type + "'"
  }

  function removeElementsByTypeFromEntity(entity : Entity) {
    if (entity != null) {
      if (T.Type == EntityColumn) {
        entity.Xml.removeChildren(createElementQName("column"))
      } else if (T.Type == EntityArray) {
        entity.Xml.removeChildren(createElementQName("array"))
      } else if (T.Type == TypeKey) {
        entity.Xml.removeChildren(createElementQName("typekey"))
      }
    }
  }

  private static function createElementQName (elementType : String) : QName {
    return new QName(EntityExtension.NAMESPACE, elementType)
  }

  function removeEntityElementsAlreadyInTypeSystem(entity : Entity) {
    var elements = getAllElements(entity)

    removeElementsByTypeFromEntity(entity)
    elements.where (\elem -> not elementExistsInTypeSystem(entity.EntityName, getElementId (elem)))
        .each(\elem -> addElement(entity, elem))
  }

  private function getAllElements (entity : Entity) : List<T> {
    if (T.Type== EntityColumn) {
      return entity.Columns.whereTypeIs (T)
    } else if (T.Type== EntityArray) {
      return entity.Arrays.whereTypeIs (T)
    } else if (T.Type== TypeKey) {
      return entity.TypeKeys.whereTypeIs (T)
    }

    return null
  }

  function addElement (entity : Entity, elem : T)  {
    if (elem typeis EntityColumn) {
      entity.addColumn(elem)
    } else if (elem typeis EntityArray) {
      entity.addArray (elem)
    } else if (elem typeis TypeKey) {
      entity.addTypeKey (elem)
    }
  }

  static function copyEntityExtensionWithoutMergeableElements(
      entityExt : EntityExtension,
      valueIfNone : EntityExtension
  ) : EntityExtension {
    if (entityExt == null) {
      return valueIfNone
    } else {
      var result = entityExt.copy()
      forEachElementType(\ helper -> helper.removeElementsByTypeFromEntity(result))
      return result
    }
  }

  //add implementsInterface which existed only in the source entity, into the target entity.
  static function addMissingImplementsInterfaceFromSource(incomingEntity : Entity, existingEntity : Entity) : boolean {
    var isAdded = false

    var currentIfaces = existingEntity.ImplementsInterfaces*.IFace
    incomingEntity.ImplementsInterfaces.where(\ii -> not currentIfaces.contains(ii.IFace))
        .each(\ii -> {
          existingEntity.addImplementsInterface(ii)
          isAdded = true
        })
    return isAdded
  }

  //add implementsEntity which existed only in the source entity, into the target entity.
  static function addMissingImplementsEntityFromSource(incomingEntity : Entity, existingEntity : Entity) : boolean {
    var isAdded = false

    var currentImplEntityNames = existingEntity.ImplementsEntitys*.Name
    incomingEntity.ImplementsEntitys.where(\implementEntity -> not currentImplEntityNames.contains(implementEntity.Name))
        .each(\implementEntity -> {
          existingEntity.addImplementsEntity(implementEntity)
          isAdded = true
        })
    return isAdded
  }

  static function addMissingForeignKeysFromSource(sourceEntity : Entity, targetEntity : Entity) {
    var newElements = targetEntity.ForeignKeys*.Name
    sourceEntity.ForeignKeys
        .where(\ element -> not newElements.contains(element.Name))
        .each(\ element -> targetEntity.addForeignKey(element))
  }
}