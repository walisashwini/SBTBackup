package gw.sbt.pca.view.presenter.rating

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.rating.RateBookContent
uses gw.sbt.pca.view.presenter.RowPresenter
uses java.util.List
uses gw.api.locale.DisplayKey

class RateTableCategoryPresenter extends RateBookDescendantPresenter {
  construct(rateBook: RateBookContent) {
    super(rateBook, createRateTableChildrenRows(rateBook))
  }

  override property get Description(): String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateTablesTitle")
  }

  private static function createRateTableChildrenRows(rateBook: RateBookContent): List<RowPresenter> {
    return rateBook.RateTables
        .map(\ rateTable -> {
          if (rateTable.IsReferencedRateTable) {
            var refTable = rateTable.OwningRateBook.getReferencedTable(rateTable.ReferenceTablePublicId)
            return new RateTablePresenter (refTable, rateTable.OwningRateBook)
          }
          return new RateTablePresenter (rateTable)
        })
        .sortBy(\ presenter -> presenter.Description)
        .toList()
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return DefiningRateBook.DecisionAndInstructionsForRateTables
  }

  override property get DiffType(): UpdateDiffType {
    return null
  }
}