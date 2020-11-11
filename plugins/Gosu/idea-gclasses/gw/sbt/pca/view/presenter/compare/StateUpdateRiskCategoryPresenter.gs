package gw.sbt.pca.view.presenter.compare

uses gw.api.locale.DisplayKey
uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.Risk
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.builder.CurrentSBTUpdateBuilder
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.pca.view.presenter.CategoryPresenter
uses gw.sbt.pca.view.presenter.PresenterUtil
uses gw.sbt.pca.view.presenter.RowPresenter
uses gw.sbt.util.DisplayDescriptionHelper

class StateUpdateRiskCategoryPresenter extends CategoryPresenter {

  construct(newRisks: Collection<Risk>,
            adoptedRisks: Collection<Risk>,
            categoryDecisionAndInstructions: DecisionAndInstructions,
            newSBTUpdateMetaData: SBTUpdateMetaData,
            adoptedSBTUpdateMetaData: SBTUpdateMetaData,
            newSBTUpdate : SBTUpdate,
            currentSBTUpdate : SBTUpdate,
            adoptionDate: Date) {
    super(createRiskPresenters(newRisks, adoptedRisks, newSBTUpdateMetaData, adoptedSBTUpdateMetaData, newSBTUpdate, currentSBTUpdate, adoptionDate),
        categoryDecisionAndInstructions,
        PresenterUtil.isMaintenanceUpdate(
            DisplayDescriptionHelper.getMetaDataEdition(newSBTUpdateMetaData),
            DisplayDescriptionHelper.getMetaDataEdition(adoptedSBTUpdateMetaData),
            DisplayDescriptionHelper.getMetaDataCWEdition(newSBTUpdateMetaData),
            DisplayDescriptionHelper.getMetaDataCWEdition(adoptedSBTUpdateMetaData)
        ))
  }

  private static function createRiskPresenters(newRisks: Collection<Risk>, adoptedRisks: Collection<Risk>,
                                               newSBTUpdateMetaData: SBTUpdateMetaData,
                                               adoptedSBTUpdateMetaData: SBTUpdateMetaData,
                                               newSBTUpdate : SBTUpdate,
                                               currentSBTUpdate : SBTUpdate,
                                               adoptionDate: Date): List<RowPresenter> {
    var riskNames = adoptedRisks*.Name.toList().union(newRisks*.Name.toList())
    CurrentSBTUpdateBuilder.buildRisks(riskNames, currentSBTUpdate, adoptionDate)

    var currentConfigRisks = currentSBTUpdate.Risks
    return riskNames.map(\riskName -> {
      var adoptedRisk = adoptedRisks.firstWhere(\risk -> (risk.Name == riskName or risk.Entity == riskName))
      var newRisk = newRisks.firstWhere(\risk -> (risk.Name == riskName or risk.Entity == riskName))
      var currentRisk = currentConfigRisks.firstWhere(\risk -> (risk.Name == riskName or risk.Entity == riskName))

      return new StateUpdateRiskRowPresenter(
          Comparison.forRisk(currentRisk, newRisk, adoptedRisk, ComparisonDecisionSource.create(newSBTUpdate)),
          DisplayDescriptionHelper.getMetaDataEdition(newSBTUpdateMetaData),
          DisplayDescriptionHelper.getMetaDataEdition(adoptedSBTUpdateMetaData),
          DisplayDescriptionHelper.getMetaDataCWEdition(newSBTUpdateMetaData),
          DisplayDescriptionHelper.getMetaDataCWEdition(adoptedSBTUpdateMetaData))
    }).where(\presenter -> presenter.Visible).orderBy(\presenter -> presenter.Description)
  }

  override property get Description(): String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RisksTitle")
  }

  override property get Selectable() : boolean {
    return Children.hasMatch(\child -> child.Selectable)
  }

  override function getUpdateDecisionDescription(): String {
    return gw.sbt.util.DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(Decision)
  }
}