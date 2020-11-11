package gw.sbt.loader

uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.TypeKey

class EntityTypeKeyHelper extends EntityElementHelper<TypeKey> {

  static function compareTypeKeys (sourceTypeKey : TypeKey, targetTypeKey : TypeKey): boolean {
    return sourceTypeKey.Name== targetTypeKey.Name
      and sourceTypeKey.TypeList == targetTypeKey.TypeList
      and sourceTypeKey.Description== targetTypeKey.Description
      and sourceTypeKey.NullOK== targetTypeKey.NullOK
  }

  //add typeKeys which are only existed in source entity into target entity.
  static function addMissingTypeKeysFromSource(sourceEntity : Entity, targetEntity : Entity) : boolean {
    var isTypeKeysAdded = false

    var typeKeyNames = targetEntity.TypeKeys*.Name
    sourceEntity.TypeKeys.where(\typeKey -> not typeKeyNames.contains(typeKey.Name))
        .each(\typeKey -> {
          targetEntity.addTypeKey(typeKey)
          isTypeKeysAdded = true
        })

    return isTypeKeysAdded
  }

  static function containsTypeKey(entity : Entity, typeKeyName : String) : boolean {
    return entity?.TypeKeys?.hasMatch(\typeKey -> typeKey.Name == typeKeyName)
  }
}