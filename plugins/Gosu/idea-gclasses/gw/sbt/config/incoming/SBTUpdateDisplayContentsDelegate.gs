package gw.sbt.config.incoming

uses gw.sbt.artifacts.properties.DisplayProperties
uses gw.sbt.artifacts.properties.ProductModelDisplayProperties
uses gw.sbt.artifacts.schedules.Schedule
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.DisplayPropertiesConfigContents
uses org.apache.commons.io.IOUtils
uses gw.sbt.artifacts.ArtifactId
uses java.lang.System

class SBTUpdateDisplayContentsDelegate implements DisplayPropertiesConfigContents {

  var _cachedDisplayProperties : DisplayProperties
  var _cachedDisplayPropertiesLines : String[]
  var _cachedProductModelDisplayProperties: ProductModelDisplayProperties
  var _cachedProductModelDisplayPropertiesLines: String[]
  var _updateContents: SBTUpdateContents as UpdateContents

  construct(updateContents: SBTUpdateContents) {
    _updateContents = updateContents
  }

  override property get DisplayProperties(): DisplayProperties {
    if (_cachedDisplayProperties == null) {
      var content = UpdateContents.getContent(ConfigurationFile.displayProperties())
      if(content == null) {
        content = UpdateContents.getContent(ConfigurationFile.displayProperties805())
      }
      _cachedDisplayProperties = (content == null ? null : new DisplayProperties(content))
    }
    return _cachedDisplayProperties
  }

  override property get ProductModelDisplayProperties(): ProductModelDisplayProperties {
    if (_cachedProductModelDisplayProperties == null) {
      var content = UpdateContents.getContent(ConfigurationFile.productModelDisplayKeys())
      if(content == null) {
        content = UpdateContents.getContent(ConfigurationFile.productModelDisplayKeys805())
      }
      _cachedProductModelDisplayProperties = (content == null ? null : new ProductModelDisplayProperties(content))
    }
    return _cachedProductModelDisplayProperties
  }

  override function getClauseDisplayProperties(clausePublicId: String): ProductModelDisplayProperties {
    var clauseDisplayPropertiesLines = getProductModelDisplayPropertiesContaining(clausePublicId)
    return new ProductModelDisplayProperties(clauseDisplayPropertiesLines)
  }

  override function getModifierPatternDisplayProperties(modifierPatternPublicid: String): ProductModelDisplayProperties {
    var modifierPatternDisplayPropertiesLines = getProductModelDisplayPropertiesContaining(modifierPatternPublicid)
    return new ProductModelDisplayProperties(modifierPatternDisplayPropertiesLines)
  }

  override function getSchedulePropertyDisplayProperties(schedule : Schedule) : DisplayProperties {
    var displayProperties = schedule.Properties.map( \ scheduleProperty -> getDisplayPropertiesFrom(scheduleProperty.Description) ).join("\n")
    return new DisplayProperties(displayProperties.Bytes)
  }

  private function getDisplayPropertiesFrom(key : String) : String {
    if (_cachedDisplayPropertiesLines == null) {
      var displayProperties = DisplayProperties
      if (displayProperties != null) {
        _cachedDisplayPropertiesLines = IOUtils.toString(displayProperties.Bytes, "UTF-8").split("\\r?\\n")
      }
    }
    return _cachedDisplayPropertiesLines.where(\displayPropertyLine -> displayPropertyLine.replaceAll(" ", "").startsWith(key + "=")).join("\n")
  }

  private function getProductModelDisplayPropertiesContaining(substring: String): String {
    if (_cachedProductModelDisplayPropertiesLines == null) {
      var displayPropertiesFileContent = ProductModelDisplayProperties
      if (displayPropertiesFileContent != null) {
        _cachedProductModelDisplayPropertiesLines = IOUtils.toString(displayPropertiesFileContent.Bytes, "UTF-8").split("\\r?\\n")
      }
    }
    return _cachedProductModelDisplayPropertiesLines.where(\displayProperty -> displayProperty.contains("_" + substring + ".")).join("\n")
  }

}
