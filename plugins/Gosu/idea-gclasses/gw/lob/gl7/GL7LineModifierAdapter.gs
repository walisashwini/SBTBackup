package gw.lob.gl7

uses gw.api.domain.ModifierAdapter

@Export
class GL7LineModifierAdapter implements ModifierAdapter {

  var _owner : GL7LineMod

  construct(owner : GL7LineMod) {
    _owner = owner
  }

  override property get OwningModifiable() : Modifiable {
    return _owner.GL7Line
  }

  override property get RateFactors() : RateFactor[] {
    return _owner.GL7LineRateFactors
  }

  override function addToRateFactors(rf : RateFactor) {
    _owner.addToGL7LineRateFactors(rf as GL7LineRF)
  }

  override function createRawRateFactor() : RateFactor {
    return new GL7LineRF(_owner.Branch)
  }

  override function removeFromRateFactors(rf : RateFactor) {
    _owner.removeFromGL7LineRateFactors(rf as GL7LineRF)
  }

}