package gw.lob.gl7

uses gw.api.reinsurance.ReinsurableCoverable
uses gw.lob.common.adapters.LobCoverageAdapter

@Export
class GL7LineCoverageAdapter extends LobCoverageAdapter <GL7LineCov> {

  construct(owner : GL7LineCov) {
    super(owner)
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7Line
  }

  override function addToCoverageArray(cov : Coverage) {
    _owner.GL7Line.addToCoverages(cov as GL7LineCov)
  }

  override function removeFromParent() {
    _owner.GL7Line.removeFromCoverages(_owner)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return _owner.BranchValue
  }

}