package gw.sbt.pca.view.presenter.compare.rating

uses gw.api.locale.DisplayKey
uses gw.sbt.loader.RateBookHelper
uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.builder.CurrentSBTUpdateBuilder
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.rating.RateBookContent
uses gw.sbt.model.rating.RateTableContent
uses gw.sbt.pca.view.presenter.CategoryPresenter
uses gw.sbt.pca.view.presenter.PresenterUtil
uses gw.sbt.pca.view.presenter.RowPresenter
uses gw.sbt.util.DisplayDescriptionHelper

class StateUpdateRateTableCategoryPresenter extends CategoryPresenter {
  construct(newRateTables : Collection<RateTableContent> ,
            adoptedRateTables : Collection<RateTableContent> ,
            newRatebook : RateBookContent,
            adoptedRatebook : RateBookContent,
            newSBTUpdateMetaData: SBTUpdateMetaData,
            adoptedSBTUpdateMetaData: SBTUpdateMetaData,
            newSBTUpdate : SBTUpdate,
            currentSBTUpdate : SBTUpdate,
            adoptionDate: Date) {
    super(createRateTablePresenters(newRateTables, adoptedRateTables, newRatebook, adoptedRatebook, newSBTUpdateMetaData,
          adoptedSBTUpdateMetaData, newSBTUpdate, currentSBTUpdate, adoptionDate),
          newRatebook.DecisionAndInstructionsForRateTables,
          PresenterUtil.isMaintenanceUpdate(
              DisplayDescriptionHelper.getMetaDataEdition(newSBTUpdateMetaData),
              DisplayDescriptionHelper.getMetaDataEdition(adoptedSBTUpdateMetaData),
              DisplayDescriptionHelper.getMetaDataCWEdition(newSBTUpdateMetaData),
              DisplayDescriptionHelper.getMetaDataCWEdition(adoptedSBTUpdateMetaData)
          ))
  }

  private static function createRateTablePresenters(newRateTables : Collection<RateTableContent> ,
                                                    adoptedRateTables : Collection<RateTableContent>,
                                                    newRatebook : RateBookContent,
                                                    adoptedRatebook : RateBookContent,
                                                    newSBTUpdateMetaData: SBTUpdateMetaData,
                                                    adoptedSBTUpdateMetaData: SBTUpdateMetaData,
                                                    newSBTUpdate : SBTUpdate,
                                                    currentSBTUpdate : SBTUpdate,
                                                    adoptionDate: Date) : List<RowPresenter> {
    var rateTableCodes = newRateTables*.TableCode.union(adoptedRateTables*.TableCode)
    CurrentSBTUpdateBuilder.buildRateBook(newRatebook, currentSBTUpdate, adoptionDate)

    return rateTableCodes.map(\tableCode -> {
      var rateTableComparison = RateBookHelper.createRateTableComparison(tableCode, newSBTUpdate, newRatebook, currentSBTUpdate.RateBook, adoptedRatebook)

      return new StateUpdateRateTableRowPresenter(
          rateTableComparison,
          DisplayDescriptionHelper.getMetaDataEdition(newSBTUpdateMetaData),
          DisplayDescriptionHelper.getMetaDataEdition(adoptedSBTUpdateMetaData),
          DisplayDescriptionHelper.getMetaDataCWEdition(newSBTUpdateMetaData),
          DisplayDescriptionHelper.getMetaDataCWEdition(adoptedSBTUpdateMetaData))
    }).where(\presenter -> presenter.Visible).orderBy(\presenter -> presenter.Description)
  }

  override property get Description(): String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateTablesTitle")
  }

  override property get Selectable() : boolean {
    return Children.hasMatch(\child -> child.Selectable)
  }

  override function getUpdateDecisionDescription() : String {
    return gw.sbt.util.DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(Decision)
  }
}