package gw.sbt.loader.io

uses gw.sbt.artifacts.systables.SystemTableRegistryFileDefinition
uses gw.sbt.config.ConfigurationFile

class SystemTableRegistryAddition extends FileModification<SystemTableRegistryFileDefinition> {

  static final var SYSTEM_TABLE_REGISTRY_FILE = ConfigurationFile.systemTableRegistryFile()

  construct(content : SystemTableRegistryFileDefinition) {
    super(SYSTEM_TABLE_REGISTRY_FILE, content)
  }

  override function perform(writer : SBTUpdateLoaderWriter) {
    writer.writeSystemTableRegistry(this)
  }

  override function undo(writer : SBTUpdateLoaderWriter) {
    writer.undoWriteSystemTableRegistry(this)
  }

}