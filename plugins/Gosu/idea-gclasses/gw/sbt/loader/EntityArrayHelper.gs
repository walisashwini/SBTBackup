package gw.sbt.loader

uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.EntityArray

class EntityArrayHelper extends EntityElementHelper<EntityArray> {
  static function compareArrays (sourceArray : EntityArray, targetArray : EntityArray): boolean {
    return sourceArray.ArrayEntity == targetArray.ArrayEntity and sourceArray.Owner == targetArray.Owner
      and sourceArray.Desc == targetArray.Desc and sourceArray.CascadeDelete == targetArray.CascadeDelete
      and sourceArray.Name == targetArray.Name
  }


  //add arrays which are only existed in source entity into target entity.
  static function addMissingArraysFromSource(sourceEntity : Entity, targetEntity : Entity) : boolean {
    var isArraysAdded = false

    var arrayNames = targetEntity.Arrays*.Name
    sourceEntity.Arrays.where(\array -> not arrayNames.contains(array.Name))
        .each(\array -> {
          targetEntity.addArray(array)
          isArraysAdded = true
        })

    return isArraysAdded
  }

  static function containsArray(entity : Entity, arrayName : String) : boolean {
    return entity?.Arrays?.hasMatch(\array -> array.Name == arrayName)
  }
}