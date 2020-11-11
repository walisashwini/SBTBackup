package gw.lob.gl7

uses gw.api.reinsurance.ReinsurableCoverable
uses gw.lob.common.adapters.LobCoverageAdapter

@Export
class GL7SublineCoverageAdapter extends LobCoverageAdapter <GL7SublineCov> {

  construct(owner : GL7SublineCov) {
    super(owner)
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7Subline
  }

  override function addToCoverageArray(cov : Coverage) {
    _owner.GL7Subline.addToCoverages(cov as GL7SublineCov)
  }

  override function removeFromParent() {
    _owner.GL7Subline.removeFromCoverages(_owner)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return _owner.BranchValue
  }

}