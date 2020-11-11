package gw.lob.gl7.tree

uses gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter

class GL7UnmannedAircraftsParentRow extends GL7AbstractSummaryRow {

  var _parentExposure : GL7Exposure
  var _policyLocation : PolicyLocation

  construct(exposure : GL7Exposure, policyLocation : PolicyLocation) {
    super(null)
    _policyLocation = policyLocation
    _parentExposure = exposure
    createChildren()
  }

  override property get Description() : String {
    return "Unmanned Aircraft"
  }

  override property get Location() : PolicyLocation {
    return _policyLocation
  }

  private function createChildren() {
    // have to call getSlice with current policy period's edit Effective date to get most up to date
    // added unmanned aircrafts
    _parentExposure.getSlice(_policyLocation.Branch.EditEffectiveDate).UnmannedAircrafts
        .each(\unmannedAircraft -> {
          if (unmannedAircraft.isEffective(_policyLocation.Branch.EditEffectiveDate)) {
            addChildRow(new GL7UnmannedAircraftSummaryRow(unmannedAircraft, Location))
          }
        })
  }
}