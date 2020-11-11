package gw.sbt.pca.view.presenter.compare

uses gw.api.locale.DisplayKey
uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.builder.CurrentSBTUpdateBuilder
uses gw.sbt.model.bureau.BureauCodes
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.pca.view.ComparisonDecisionHandler
uses gw.sbt.pca.view.DecisionRequiredStrategy
uses gw.sbt.pca.view.presenter.CategoryPresenter
uses gw.sbt.pca.view.presenter.PresenterUtil
uses gw.sbt.pca.view.presenter.RowPresenter
uses gw.sbt.util.DisplayDescriptionHelper

class StateUpdateBureauCodesCategoryPresenter extends CategoryPresenter {
  private static var _cachedAllSystemTablePresenters : List<StateUpdateBureauCodesRowPresenter> = {}
  var _allSystemTablePresenters : List<StateUpdateBureauCodesRowPresenter> as AllSystemTablePresenters = {}

  construct(newBureauCodesList : List<BureauCodes>,
            adoptedBureauCodesList : List<BureauCodes>,
            categoryDecisionAndInstructions: DecisionAndInstructions,
            newSBTUpdateMetaData: SBTUpdateMetaData,
            adoptedSBTUpdateMetaData: SBTUpdateMetaData,
            newSBTUpdate : SBTUpdate,
            currentSBTUpdate : SBTUpdate,
            adoptionDate: Date) {
    super(
        createBureauCodesPresenters(newBureauCodesList, adoptedBureauCodesList, newSBTUpdateMetaData,
          adoptedSBTUpdateMetaData, newSBTUpdate, currentSBTUpdate, adoptionDate),
        categoryDecisionAndInstructions,
        PresenterUtil.isMaintenanceUpdate(
            DisplayDescriptionHelper.getMetaDataEdition(newSBTUpdateMetaData),
            DisplayDescriptionHelper.getMetaDataEdition(adoptedSBTUpdateMetaData),
            DisplayDescriptionHelper.getMetaDataCWEdition(newSBTUpdateMetaData),
            DisplayDescriptionHelper.getMetaDataCWEdition(adoptedSBTUpdateMetaData)
        ))

    _allSystemTablePresenters.addAll(_cachedAllSystemTablePresenters)
    _cachedAllSystemTablePresenters.clear()
  }

  private static function createBureauCodesPresenters(newBureauCodesList : List<BureauCodes>,
                                                      adoptedBureauCodesList : List<BureauCodes>,
                                                      newSBTUpdateMetaData: SBTUpdateMetaData,
                                                      adoptedSBTUpdateMetaData: SBTUpdateMetaData,
                                                      newSBTUpdate : SBTUpdate,
                                                      currentSBTUpdate : SBTUpdate,
                                                      adoptionDate: Date) : List<RowPresenter> {
    var systemTablesToBeRead = newBureauCodesList*.FileName.toList().union(adoptedBureauCodesList*.FileName.toList())
    CurrentSBTUpdateBuilder.buildBureauCodes(currentSBTUpdate, adoptionDate, systemTablesToBeRead)

    var tableNames = newBureauCodesList*.TableName.toList().union(adoptedBureauCodesList*.TableName.toList())
    return tableNames.map(\tableName -> {
      var adoptedBureauCodes = adoptedBureauCodesList.firstWhere(\bureauCodes -> bureauCodes.TableName == tableName)
      var newBureauCodes = newBureauCodesList.firstWhere(\bureauCodes -> bureauCodes.TableName == tableName)
      var currentBureauCodes = currentSBTUpdate.SystemTables.firstWhere(\bureauCodes -> bureauCodes.TableName == tableName)

      var rowPresenter = new StateUpdateBureauCodesRowPresenter(
          Comparison.forBureauCodes(currentBureauCodes, newBureauCodes, adoptedBureauCodes, adoptionDate,
              ComparisonDecisionSource.create(newSBTUpdate)),
          DisplayDescriptionHelper.getMetaDataEdition(newSBTUpdateMetaData),
          DisplayDescriptionHelper.getMetaDataEdition(adoptedSBTUpdateMetaData),
          new ComparisonDecisionHandler(new DecisionRequiredStrategy()),
          DisplayDescriptionHelper.getMetaDataCWEdition(newSBTUpdateMetaData),
          DisplayDescriptionHelper.getMetaDataCWEdition(adoptedSBTUpdateMetaData))
      _cachedAllSystemTablePresenters.add(rowPresenter)

      return rowPresenter
    }).where(\presenter -> presenter.Visible).orderBy(\presenter -> presenter.Description)
  }

  override property get Description(): String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.BureauCodeTitle")
  }

  override property get Selectable() : boolean {
    return Children.hasMatch(\child -> child.Selectable)
  }

  override function getUpdateDecisionDescription(): String {
    return gw.sbt.util.DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(Decision)
  }
}