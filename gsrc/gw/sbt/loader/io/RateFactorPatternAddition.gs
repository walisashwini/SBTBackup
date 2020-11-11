package gw.sbt.loader.io

uses gw.sbt.config.ConfigurationFile
uses gw.sbt.artifacts.policyline.ModifierPattern

class RateFactorPatternAddition extends FileModification<ModifierPattern> {
  construct(policyLine: String, content: ModifierPattern) {
    super(ConfigurationFile.policyLinePattern(policyLine + ".xml", policyLine), content)
  }

  override function perform(writer: SBTUpdateLoaderWriter) {
    writer.writeModifierPattern(this)
  }

  override function undo(writer: SBTUpdateLoaderWriter) {
   writer.undoWriteModifierPattern(this)
  }
}