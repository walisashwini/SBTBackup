package gw.sbt.pca.view.selection

uses gw.sbt.pca.ConfigurationKey
uses java.util.Date

interface UpdateSelectionRepository {

  function retrieveSelectionsForUpdate(configurationKey: ConfigurationKey) : UpdateSelections
  function saveSelectionsForUpdate(configurationKey: ConfigurationKey, adoptedEffectiveDate : Date, adoptedVersion : String, newEffectiveDate : Date, newVersion : String)

}