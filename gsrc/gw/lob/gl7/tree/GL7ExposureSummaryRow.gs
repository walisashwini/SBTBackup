package gw.lob.gl7.tree

uses gw.lob.gl7.presenters.GL7ExposurePresenter
uses gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter

class GL7ExposureSummaryRow extends GL7AbstractSummaryRow<GL7Exposure> {

  var _exposure : GL7Exposure
  var _policyLocation : PolicyLocation

  construct(exposure : GL7Exposure, policyLocation : PolicyLocation) {
    super(exposure)
    _exposure = exposure
    _policyLocation = policyLocation
    createChildren()
  }

  override property get Description(): String {
    var exposurePresenter = GL7ExposurePresenter.create(_exposure)
    return "(" +  exposurePresenter.EffectiveDate + ")  " + exposurePresenter.ClassCode + " - " + exposurePresenter.ClassDescription
  }

  override property get Location(): PolicyLocation {
    return _policyLocation
  }

  private function createChildren() {
    addChildRow(new GL7UnmannedAircraftsParentRow(_exposure, Location))
  }
}