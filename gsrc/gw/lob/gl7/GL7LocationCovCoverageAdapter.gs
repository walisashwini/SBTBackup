package gw.lob.gl7

uses gw.api.reinsurance.ReinsurableCoverable
uses gw.lob.common.adapters.LobCoverageAdapter

@Export
class GL7LocationCovCoverageAdapter extends LobCoverageAdapter <GL7LocationCov> {

  construct(owner : GL7LocationCov) {
    super(owner)
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7Location
  }

  override function addToCoverageArray( p0: Coverage ) {
    _owner.GL7Location.addToCoverages( p0 as GL7LocationCov )
  }

  override function removeFromParent() {
    _owner.GL7Location.removeFromCoverages( _owner )
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return(_owner.BranchValue)
  }
}
