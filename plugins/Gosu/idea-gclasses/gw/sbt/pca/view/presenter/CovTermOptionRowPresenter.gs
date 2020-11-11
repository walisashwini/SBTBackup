package gw.sbt.pca.view.presenter

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.clause.CovTermOption
uses gw.sbt.pca.view.DecisionHandler

class CovTermOptionRowPresenter extends RowPresenter {
  var _covTermOption : CovTermOption

  construct(covTermOption : CovTermOption, decisionHandler : DecisionHandler) {
    super(null, decisionHandler)
    _covTermOption = covTermOption
  }

  override property get Description(): String {
    return _covTermOption.Description
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _covTermOption.DecisionAndInstructions
  }

  override property get DiffType(): UpdateDiffType {
    return UpdateDiffType.from(_covTermOption.Intent)
  }

  override function detailsAvailableToShow(): boolean {
    return false
  }
}