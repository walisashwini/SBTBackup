package gw.sbt.pca.view.presenter.bureau

uses gw.sbt.model.SBTUpdate
uses gw.sbt.pca.view.presenter.DescriptionRowPresenter
uses gw.sbt.pca.view.presenter.RowPresenter

uses java.util.List
uses gw.api.locale.DisplayKey

class BureauCodesCategoryPresenter extends DescriptionRowPresenter {

  construct(update : SBTUpdate) {
    super(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.BureauCodeTitle"),
        createBureauCodeChildren(update))
  }

  private static function createBureauCodeChildren(update: SBTUpdate): List<RowPresenter> {
    return update.BureauCodes.where(\bureauCodes -> bureauCodes.Codes.HasElements)
        .map( \ bureauCodes -> new BureauCodePresenter(bureauCodes))
  }

  override function detailsAvailableToShow(): boolean {
    return false
  }

}
