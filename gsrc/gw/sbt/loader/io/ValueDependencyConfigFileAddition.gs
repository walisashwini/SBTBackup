package gw.sbt.loader.io

uses gw.sbt.config.ConfigurationFile
uses gw.sbt.artifacts.valuedependency.ValueDependencyConfig

class ValueDependencyConfigFileAddition extends FileAddition<ValueDependencyConfig>  {
  construct(productAbbreviation : String, valueDependencyConfig : ValueDependencyConfig) {
    super(ConfigurationFile.valueDependencyConfig(productAbbreviation), valueDependencyConfig)
  }
}