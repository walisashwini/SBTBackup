package gw.sbt.pca.view.presenter.rating

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.TabularRowDataComparator
uses gw.sbt.model.rating.FactorRow
uses gw.sbt.model.rating.RateBookContent
uses gw.sbt.model.rating.RateTableContent
uses gw.sbt.pca.view.presenter.PresenterUtil
uses pcf.RateTableDiffPopup
uses java.util.Collections
uses java.util.List
uses gw.api.locale.DisplayKey

class RateTablePresenter extends RateBookDescendantPresenter {
  var _rateTable: RateTableContent
  construct(rateTable: RateTableContent) {
    this(rateTable, rateTable.OwningRateBook)
  }

  construct(rateTable: RateTableContent, definingRateBook: RateBookContent) {
    super(definingRateBook)
    _rateTable = rateTable
  }

  override property get Description(): String {
    var suffix = IsStateTable
        ? DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateBook.RatingStateSuffix")
        : DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateBook.RatingCWSuffix")
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateBook.RatingLabel", _rateTable.TableName, suffix)
  }

  property get Jurisdiction(): String {
    return IsStateTable
        ? _rateTable.OwningRateBook.Jurisdiction
        : DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateTable.CountryWideAbbreviation")
  }

  private property get IsStateTable(): boolean {
    return _rateTable.OwningRateBook.Jurisdiction.HasContent
  }

  property get Edition(): String {
    return _rateTable.OwningRateBook.Edition
  }

  property get ParameterNames(): List<String> {
    return _rateTable.ParameterDefinitions*.ColumnName.toList()
  }

  property get FactorName(): String {
    return _rateTable.FactorName?: "DEFALT! FACTOR NAME"
  }

  property get Rows(): List<FactorRow> {
    var rows = _rateTable.FactorRows.toList()
    Collections.sort(rows, new TabularRowDataComparator ())
    return rows
  }

  override function showDetails() {
    RateTableDiffPopup.push(this)
  }

  override function detailsAvailableToShow(): boolean {
    return true
  }

  property get InstructionsIconName(): String {
    return PresenterUtil.getInstructionsIconName(DecisionAndInstructions)
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _rateTable.DecisionAndInstructions
  }

  override property get DiffType(): UpdateDiffType {
    return UpdateDiffType.from(DefiningRateBook.Intent)
  }
}