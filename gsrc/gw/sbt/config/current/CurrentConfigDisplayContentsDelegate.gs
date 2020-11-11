package gw.sbt.config.current

uses gw.sbt.artifacts.properties.DisplayProperties
uses gw.sbt.artifacts.properties.ProductModelDisplayProperties
uses gw.sbt.artifacts.schedules.Schedule
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.DisplayPropertiesConfigContents
uses gw.sbt.config.TargetConfiguration
uses gw.sbt.artifacts.ArtifactId

class CurrentConfigDisplayContentsDelegate implements DisplayPropertiesConfigContents {

  var _displayProperties: ProductModelDisplayProperties
  var _config: TargetConfiguration as Config

  construct(currentConfig : CurrentConfigContents) {
    _config = currentConfig.Config
  }

  override property get DisplayProperties(): DisplayProperties {
    var content = Config.contents(ConfigurationFile.displayProperties())
    return content != null ? new DisplayProperties(content) : null
  }

  override property get ProductModelDisplayProperties(): ProductModelDisplayProperties {
    if (_displayProperties == null) {
      _displayProperties = new ProductModelDisplayProperties (Config.contents(ConfigurationFile.productModelDisplayKeys()))
    }
    return _displayProperties
  }

  override function getClauseDisplayProperties(clausePublicId: String): ProductModelDisplayProperties {
    return ProductModelDisplayProperties.extractPropertiesForArtifact(ArtifactId.make(CLAUSE, clausePublicId))
  }

  override function getModifierPatternDisplayProperties(modifierPatternPublicid: String) :  ProductModelDisplayProperties {
    throw "Not implemented"
  }

  override function getSchedulePropertyDisplayProperties(schedule : Schedule) : DisplayProperties {
    throw "Not implemented"
  }

}
