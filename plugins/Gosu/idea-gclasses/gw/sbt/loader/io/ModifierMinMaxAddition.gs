package gw.sbt.loader.io

uses gw.sbt.artifacts.policyline.ModifierMinMax
uses gw.sbt.config.ConfigurationFile

class ModifierMinMaxAddition extends FileAddition<ModifierMinMax> {

  construct(policyLine : String, jurisdiction : String, content: ModifierMinMax) {
    super(ConfigurationFile.modifierMinMax(policyLine, jurisdiction), content)
  }
}