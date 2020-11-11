package gw.lob.gl7

uses gw.api.reinsurance.ReinsurableCoverable
uses gw.lob.common.adapters.LobCoverageAdapter

@Export
class GL7ExposureCovCoverageAdapter extends LobCoverageAdapter <GL7ExposureCov> {

  construct(owner : GL7ExposureCov) {
    super(owner)
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7Exposure
  }

  override function addToCoverageArray(p0 : Coverage) {
    _owner.GL7Exposure.addToCoverages(p0 as GL7ExposureCov)
  }

  override function removeFromParent() {
    _owner.GL7Exposure.removeFromCoverages(_owner)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return _owner.BranchValue
  }
}
