package gw.sbt.pca.view.selection

uses gw.sbt.pca.ConfigurationKey

uses java.util.Date
uses java.util.HashMap
uses java.util.Map

class InMemoryUpdateSelectionRepository implements UpdateSelectionRepository {

  var _updateSelections : Map<ConfigurationKey, UpdateSelections>

  construct() {
    _updateSelections = new HashMap<ConfigurationKey, UpdateSelections>()
  }

  override function retrieveSelectionsForUpdate(configurationKey : ConfigurationKey) : UpdateSelections {
    return _updateSelections.get(configurationKey)
  }

  override function saveSelectionsForUpdate(configurationKey : ConfigurationKey, adoptedEffectiveDate : Date, adoptedVersion : String, newEffectiveDate : Date, newVersion : String) {
    var updateSelections = new UpdateSelections(new UpdateSelection(adoptedEffectiveDate, adoptedVersion), new UpdateSelection(newEffectiveDate, newVersion))
    _updateSelections.put(configurationKey, updateSelections)
  }
}