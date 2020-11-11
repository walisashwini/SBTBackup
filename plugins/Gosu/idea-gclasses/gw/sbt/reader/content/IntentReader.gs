package gw.sbt.reader.content

uses gw.sbt.index.SBTUpdateEntry
uses gw.sbt.model.Intent

class IntentReader {

  function read(updateEntry: SBTUpdateEntry) : Intent {
    return (updateEntry == null or updateEntry.Intent == null)
        ? null
        : Intent.fromString(updateEntry.Intent.Type)
  }

}