package gw.sbt.pca.view.presenter.compare

uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.pca.view.presenter.CategoryPresenter
uses gw.sbt.pca.view.presenter.PresenterUtil
uses gw.sbt.pca.view.presenter.RowPresenter
uses gw.sbt.util.DisplayDescriptionHelper
uses gw.sbt.model.builder.CurrentSBTUpdateBuilder
uses java.util.List
uses gw.api.locale.DisplayKey

class StateUpdateClauseCategoryPresenter extends CategoryPresenter {
  construct(newClauses : List<Clause>,
            adoptedClauses : List<Clause>,
            categoryDecisionAndInstructions : DecisionAndInstructions,
            newSBTUpdateMetaData : SBTUpdateMetaData,
            adoptedSBTUpdateMetaData : SBTUpdateMetaData,
            newSBTUpdate : SBTUpdate,
            currentSBTUpdate : SBTUpdate,
            adoptionDate: Date) {
    super(createClausePresenters(newClauses, adoptedClauses, newSBTUpdateMetaData, adoptedSBTUpdateMetaData, newSBTUpdate, currentSBTUpdate, adoptionDate),
        categoryDecisionAndInstructions,
        PresenterUtil.isMaintenanceUpdate(
            DisplayDescriptionHelper.getMetaDataEdition(newSBTUpdateMetaData),
            DisplayDescriptionHelper.getMetaDataEdition(adoptedSBTUpdateMetaData),
            DisplayDescriptionHelper.getMetaDataCWEdition(newSBTUpdateMetaData),
            DisplayDescriptionHelper.getMetaDataCWEdition(adoptedSBTUpdateMetaData)
        ))
  }

  private static function createClausePresenters(newClauses : List<Clause>,
                                                 adoptedClauses : List<Clause>,
                                                 newSBTUpdateMetaData : SBTUpdateMetaData,
                                                 adoptedSBTUpdateMetaData : SBTUpdateMetaData,
                                                 newSBTUpdate : SBTUpdate,
                                                 currentSBTUpdate : SBTUpdate,
                                                 adoptionDate: Date) : List<RowPresenter> {
    var publicIDs = adoptedClauses*.PublicId.toList().union(newClauses*.PublicId.toList())
    CurrentSBTUpdateBuilder.buildClauses(publicIDs, currentSBTUpdate, adoptionDate)

    return publicIDs.map( \ publicID -> {
      var adoptedClause = adoptedClauses.firstWhere( \ clause -> clause.PublicId == publicID )
      var newClause = newClauses.firstWhere( \ clause -> clause.PublicId == publicID )
      var currentClause = currentSBTUpdate.Clauses.firstWhere( \ clause -> clause.PublicId == publicID )

      return new StateUpdateClauseRowPresenter (
          Comparison.forClause(currentClause, newClause, adoptedClause, ComparisonDecisionSource.create(newSBTUpdate)),
          DisplayDescriptionHelper.getMetaDataEdition(newSBTUpdateMetaData),
          DisplayDescriptionHelper.getMetaDataEdition(adoptedSBTUpdateMetaData),
          DisplayDescriptionHelper.getMetaDataCWEdition(newSBTUpdateMetaData),
          DisplayDescriptionHelper.getMetaDataCWEdition(adoptedSBTUpdateMetaData))

    }).where( \ presenter -> presenter.Visible ).orderBy(\ presenter -> presenter.Description)
  }

  override property get Description() : String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.ClausesTitle")
  }

  override function getUpdateDecisionDescription() : String {
    return gw.sbt.util.DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(Decision)
  }
}
