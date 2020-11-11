package gw.lob.gl7.tree

uses gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter

class GL7UnmannedAircraftSummaryRow extends GL7AbstractSummaryRow<GL7UnmannedAircraft> {

  var _unmannedAircraft : GL7UnmannedAircraft
  var _policyLocation : PolicyLocation

  construct(unmannedAircraft : GL7UnmannedAircraft, policyLocation : PolicyLocation) {
    super(unmannedAircraft)
    _unmannedAircraft = unmannedAircraft
    _policyLocation = policyLocation
  }

  override property get Description() : String {
    return GL7UnmannedAircraftPresenter.getUnmannedAircraftDescription(_unmannedAircraft)
  }

  override property get Location() : PolicyLocation {
    return _policyLocation
  }
}