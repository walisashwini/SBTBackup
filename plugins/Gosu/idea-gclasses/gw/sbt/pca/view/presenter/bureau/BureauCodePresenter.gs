package gw.sbt.pca.view.presenter.bureau

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.bureau.BureauCode
uses gw.sbt.model.bureau.BureauCodes
uses gw.sbt.pca.view.presenter.PresenterUtil
uses gw.sbt.pca.view.presenter.RowPresenter
uses pcf.BureauCodesDetailPopup
uses java.util.Collections
uses gw.sbt.model.TabularRowDataComparator
uses java.util.List

class BureauCodePresenter extends RowPresenter {
  var _codes: BureauCodes
  var _description : String

  construct(codes: BureauCodes) {
    super({})
    _codes = codes
    _description = codes.Label
  }

  construct(codes: BureauCodes, description: String) {
    super({})
    _codes = codes
    _description = description
  }

  override function detailsAvailableToShow(): boolean {
    return true
  }

  override property get Description(): String {
    return _description
  }

  override property get DiffType(): UpdateDiffType {
    return UpdateDiffType.TC_CHANGED
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _codes.DecisionAndInstructions
  }

  property get Jurisdiction(): String {
    return _codes.Jurisdiction
  }

  property get ColumnHeadings(): List<String> {
    return _codes.AttributeNames
  }

  property get Rows(): List<BureauCode>{
    Collections.sort(_codes.Codes, new TabularRowDataComparator ())
    return _codes.Codes
  }

  override function showDetails() {
    BureauCodesDetailPopup.push(this)
  }

  property get InstructionsIconName(): String {
    return PresenterUtil.getInstructionsIconName(DecisionAndInstructions)
  }

  override property get Selectable(): boolean {
    return false
  }
}
