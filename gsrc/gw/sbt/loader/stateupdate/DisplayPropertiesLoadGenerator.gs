package gw.sbt.loader.stateupdate

uses gw.sbt.artifacts.properties.DisplayProperties
uses gw.sbt.artifacts.properties.ProductModelDisplayProperties
uses gw.sbt.config.ConfigContents
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.Load
uses gw.sbt.loader.io.DisplayPropertiesAddition
uses gw.sbt.loader.io.ProductModelDisplayPropertiesAddition
uses gw.sbt.loader.reporter.MessageReporter

//Load Generator for display properties and productmodel display properties

class DisplayPropertiesLoadGenerator extends StateUpdateLoadGenerator {
  construct(
      currentContents : CurrentConfigContents,
      updateContents : SBTUpdateContents,
      adoptedContents : SBTUpdateContents,
      messageReporter : MessageReporter
  ) {
    super(currentContents, updateContents, adoptedContents)
    _messageReporter = messageReporter
  }

  function generateLoads() : List<Load> {
    var loads : List<Load> = {}
    // productmodel.display.properties
    if (_updateContents.ProductModelDisplayProperties != null) {
      var load = new Load<ProductModelDisplayProperties>()
      var addedProductModelDisplayProperties = getPropertiesDelta(
          \ contents -> contents.ProductModelDisplayProperties,
          :reportConflict = \ displayKey -> {
            Logger.warn("The product model display property: ${displayKey} already exists in the current configuration, Manual review of this property is recommended")
            _messageReporter.ConflictReporter.reportProductModelDisplayProperty(displayKey,
                ProductModelDisplayPropertiesFile)
          })
      if (addedProductModelDisplayProperties.PropertyNames.HasElements) {
        load.add(new ProductModelDisplayPropertiesAddition(addedProductModelDisplayProperties))
        loads.add(load)
      }
    }
    // display.properties
    if (_updateContents.DisplayProperties != null) {
      var load = new Load<DisplayProperties>()
      var addedDisplayProperties = getPropertiesDelta(
          \ contents -> contents.DisplayProperties,
          :reportConflict = \ displayKey -> {
            Logger.warn("The display property: ${displayKey} already exists in the current configuration, Manual review of this property is recommended")
            _messageReporter.ConflictReporter.reportDisplayProperty(displayKey, DisplayPropertiesFile)
          })

      if (addedDisplayProperties.PropertyNames.HasElements) {
        load.add(new DisplayPropertiesAddition(addedDisplayProperties))
        loads.add(load)
      }
    }
    return loads
  }

  private function getPropertiesDelta(
      getDisplayProperties(contents : ConfigContents) : DisplayProperties,
      reportConflict(displayKey : String)
  ) : DisplayProperties {
    var displayPropertiesDelta = new DisplayProperties()
    var currentDisplayProperties = getDisplayProperties(_currentContents)
    var updateDisplayProperties = getDisplayProperties(_updateContents)
    var adoptedDisplayProperties = getDisplayProperties(_adoptedContents)

    updateDisplayProperties.PropertyNames.each(\ newUpdateKey -> {
      var currentDisplayProperty = currentDisplayProperties?.getProperty(newUpdateKey)
      var newDisplayProperty = updateDisplayProperties?.getProperty(newUpdateKey)
      var adoptedDisplayProperty = adoptedDisplayProperties?.getProperty(newUpdateKey)
      var isISOChange = newDisplayProperty != adoptedDisplayProperty
      var isCustomized = currentDisplayProperty != adoptedDisplayProperty
      if (isISOChange and not isCustomized)
        displayPropertiesDelta.assignProperty(newUpdateKey, updateDisplayProperties.getProperty(newUpdateKey))
      else if (currentDisplayProperty != newDisplayProperty and isISOChange and isCustomized)
        reportConflict(newUpdateKey)
    })

    return displayPropertiesDelta
  }

  private property get DisplayPropertiesFile() : ConfigurationFile {
    return firstConfigurationFileThatExistsInUpdateFrom({
        ConfigurationFile.displayProperties(),
        ConfigurationFile.displayProperties805()
    })
  }

  private property get ProductModelDisplayPropertiesFile() : ConfigurationFile {
    return firstConfigurationFileThatExistsInUpdateFrom({
        ConfigurationFile.productModelDisplayKeys(),
        ConfigurationFile.productModelDisplayKeys805()
    })
  }

  private function firstConfigurationFileThatExistsInUpdateFrom(files : List<ConfigurationFile>) : ConfigurationFile {
    return files.firstWhere(\ file -> _updateContents.contentExist(file.Path))
  }
}