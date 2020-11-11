package gw.sbt.loader.io

uses gw.sbt.artifacts.typelists.TypeList
uses gw.sbt.config.ConfigurationFile

class TypeListModification extends FileModification<TypeList>{
  construct(typeList : TypeList) {
    super(ConfigurationFile.typelistFromExtensions(typeList.FileNameWithExtension), typeList)
  }

  override function perform(writer : SBTUpdateLoaderWriter) {
    writer.writeTypeList(this)
  }

}