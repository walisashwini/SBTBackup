package gw.sbt.pca.view.presenter

uses java.util.List

class DescriptionRowPresenter extends RowPresenter {
  var _description : String

  construct(description : String, rowPresenters : List<RowPresenter>) {
    super(rowPresenters, null)
    _description = description
  }

  override property get Description(): String {
    return _description
  }

  override property get DiffType(): UpdateDiffType {
    return null
  }

  override property get Selectable(): boolean {
    return false
  }
}