package gw.sbt.loader.io

uses gw.sbt.artifacts.typelists.TypeList
uses gw.sbt.config.ConfigurationFile

class TypeListAddition extends FileModification<TypeList> {

  construct(typeList : TypeList) {
    super(ConfigurationFile.typelistFromExtensions(typeList.FileNameWithExtension), typeList)
  }

}