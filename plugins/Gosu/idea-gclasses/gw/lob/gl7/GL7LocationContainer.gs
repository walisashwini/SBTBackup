package gw.lob.gl7

class GL7LocationContainer {
  var _line : GL7GeneralLiabilityLine

  construct(line : GL7GeneralLiabilityLine) {
    _line = line
  }

  property get UnusedLocations() : List<AccountLocation> {
    return _line.Branch.Policy.Account.ActiveAccountLocations
        .subtract(_line.Branch.PolicyLocations*.AccountLocation)
        .toList()
  }

  function addLocationsToPolicy(accountLocations: List<AccountLocation>) {
    _line.Branch.addLocations(accountLocations)
  }

  function removeLocations(policyLocation: PolicyLocation) {
    var gl7Locations = _line.GL7SublineTypes*.Locations
                            .where(\ l -> l.Location.FixedId == policyLocation.FixedId)
    gl7Locations.each(\ location -> {
      location.BasisScalableGL7Exposures.each( \ exp -> exp.endExposureWM(_line.Branch.EditEffectiveDate))
      location.SublineType.removeFromLineSpecificLocations(location)
    })
  }

  function removePolicyLocation(policyLocation: PolicyLocation) {
    removeLocations(policyLocation)
    if (_line.Branch.canRemoveLocation(policyLocation)) {
      _line.Branch.removeLocation(policyLocation)
    }
  }

}