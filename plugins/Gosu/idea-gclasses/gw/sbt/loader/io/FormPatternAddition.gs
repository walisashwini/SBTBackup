package gw.sbt.loader.io

uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.config.ConfigurationFile
uses java.util.Date

class FormPatternAddition extends FileModification<PolicyFormPattern>{
  construct(policyLine : String, jurisdiction : String, processedDate : Date, content : PolicyFormPattern) {
    super(ConfigurationFile.formPatterns(jurisdiction, policyLine, processedDate), content)
  }

  override function perform(writer : SBTUpdateLoaderWriter) {
    writer.writeForm(this)
  }

  override function undo(writer : SBTUpdateLoaderWriter) {
    writer.undoWriteForm(this)
  }
}