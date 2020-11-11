package gw.sbt.loader.io

uses gw.sbt.artifacts.lookuptables.LookupTables
uses gw.sbt.config.ConfigurationFile

class LookupTablesFileAddition extends FileAddition< LookupTables > {
  construct(configurationFile : ConfigurationFile, lookupTables : LookupTables) {
    super(configurationFile, lookupTables)
  }
}