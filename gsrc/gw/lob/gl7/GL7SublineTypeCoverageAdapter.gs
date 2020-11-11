package gw.lob.gl7

uses gw.api.reinsurance.ReinsurableCoverable
uses gw.lob.common.adapters.LobCoverageAdapter

@Export
class GL7SublineTypeCoverageAdapter extends LobCoverageAdapter <GL7SublineTypeCov> {

  construct(owner : GL7SublineTypeCov) {
    super(owner)
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7SublineType
  }

  override function addToCoverageArray(cov : Coverage) {
    _owner.GL7SublineType.addToCoverages(cov as GL7SublineTypeCov)
  }

  override function removeFromParent() {
    _owner.GL7SublineType.removeFromCoverages(_owner)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return _owner.BranchValue
  }

}