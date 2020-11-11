package gw.sbt.pca.view.selection

uses gw.api.database.Query
uses gw.sbt.pca.ConfigurationKey

uses java.util.Date

class DBUpdateSelectionRepository implements UpdateSelectionRepository {

  override function retrieveSelectionsForUpdate(configurationKey : ConfigurationKey) : UpdateSelections {
    var storedSelection = findSelection(configurationKey)
    if (storedSelection == null) return null
    return new UpdateSelections(
        new UpdateSelection(storedSelection.AdoptedEffectiveDate, storedSelection.AdoptedVersion),
        new UpdateSelection(storedSelection.NewEffectiveDate, storedSelection.NewVersion))
  }

  override function saveSelectionsForUpdate(configurationKey : ConfigurationKey, adoptedEffectiveDate : Date, adoptedVersion : String, newEffectiveDate : Date, newVersion : String) {
   gw.transaction.Transaction.runWithNewBundle(\bundle -> {
      var storedSelection = findSelection(configurationKey)
      if(storedSelection != null) {
        bundle.add(storedSelection)
      } else {
        storedSelection = new ConfigUpdateSelection()
        storedSelection.Line = configurationKey.Line
        storedSelection.Jurisdiction = typekey.Jurisdiction.get(configurationKey.Jurisdiction)
      }

      storedSelection.AdoptedEffectiveDate = adoptedEffectiveDate
      storedSelection.AdoptedVersion = adoptedVersion
      storedSelection.NewEffectiveDate = newEffectiveDate
      storedSelection.NewVersion = newVersion
   })
  }

  private function findSelection(configurationKey : ConfigurationKey) : ConfigUpdateSelection {
    var query = Query.make(ConfigUpdateSelection)
    query
        .compare(ConfigUpdateSelection#Line, Equals, configurationKey.Line)
        .compare(ConfigUpdateSelection#Jurisdiction, Equals, typekey.Jurisdiction.get(configurationKey.Jurisdiction))
        .compare(ConfigUpdateSelection#NewEffectiveDate, Equals, configurationKey.EffectiveDate)
        .compare(ConfigUpdateSelection#NewVersion, Equals, configurationKey.Version)
    return query.select().first()
  }

}