package gw.lob.gl7

uses gw.api.domain.ModifierAdapter

@Export
class GL7SublineModifierAdapter implements ModifierAdapter {

  var _owner : GL7SublineMod

  construct(owner : GL7SublineMod) {
    _owner = owner
  }

  override property get OwningModifiable() : Modifiable {
    return _owner.GL7Subline
  }

  override property get RateFactors() : RateFactor[] {
    return _owner.GL7SublineRateFactors
  }

  override function addToRateFactors(rf : RateFactor) {
    _owner.addToGL7SublineRateFactors(rf as GL7SublineRF)
  }

  override function createRawRateFactor() : RateFactor {
    return new GL7SublineRF(_owner.Branch)
  }

  override function removeFromRateFactors(rf : RateFactor) {
    _owner.removeFromGL7SublineRateFactors(rf as GL7SublineRF)
  }
}