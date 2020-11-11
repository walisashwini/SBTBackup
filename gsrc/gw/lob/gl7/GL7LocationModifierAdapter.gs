package gw.lob.gl7

uses gw.api.domain.ModifierAdapter

@Export
class GL7LocationModifierAdapter implements ModifierAdapter {

  var _owner : GL7LocationMod

  construct(owner : GL7LocationMod) {
    _owner = owner
  }

  override property get OwningModifiable() : Modifiable {
    return _owner.GL7Location
  }

  override property get RateFactors() : RateFactor[] {
    return _owner.GL7LocationRateFactors
  }

  override function addToRateFactors(rf : RateFactor) {
    _owner.addToGL7LocationRateFactors(rf as GL7LocationRF)
  }

  override function createRawRateFactor() : RateFactor {
    return new GL7LocationRF(_owner.Branch)
  }

  override function removeFromRateFactors(rf : RateFactor) {
    _owner.removeFromGL7LocationRateFactors(rf as GL7LocationRF)
  }
}