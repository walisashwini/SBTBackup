package gw.sbt.config

uses gw.sbt.artifacts.bureaus.BureauCodeFileDefinition
uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.artifacts.typelists.TypeList
uses gw.sbt.artifacts.typelists.TypeListExtension
uses java.util.List

interface DataModelConfigContents {

  function getEntity(name: String): Entity

  function getEntityExtension(name: String): EntityExtension

  function getEntities(): List<Entity>

  function getEntityExtensions(): List<EntityExtension>

  function getStateTypeListExtensions(productAbbreviation: String): List<TypeListExtension>

  function getStateExtensions(state: String): List<EntityExtension>

  function getTypeList(name: String): TypeList

  function getTypeListExtension(name: String): TypeListExtension

  function getBureauCodeFileDefinitions(lineCode : String): List<BureauCodeFileDefinition>

  function getTypeLists(): List<TypeList>

  function getTypeListExtensions(): List<TypeListExtension>
}
