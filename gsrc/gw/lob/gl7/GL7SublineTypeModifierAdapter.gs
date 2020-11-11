package gw.lob.gl7

uses gw.api.domain.ModifierAdapter

@Export
class GL7SublineTypeModifierAdapter implements ModifierAdapter {

  var _owner : GL7SublineTypeMod

  construct(owner : GL7SublineTypeMod) {
    _owner = owner
  }

  override property get OwningModifiable() : Modifiable {
    return _owner.GL7SublineType
  }

  override property get RateFactors() : RateFactor[] {
    return _owner.GL7SublineTypeRateFactors
  }

  override function addToRateFactors(rf : RateFactor) {
    _owner.addToGL7SublineTypeRateFactors(rf as GL7SublineTypeRF)
  }

  override function createRawRateFactor() : RateFactor {
    return new GL7SublineTypeRF(_owner.Branch)
  }

  override function removeFromRateFactors(rf : RateFactor) {
    _owner.removeFromGL7SublineTypeRateFactors(rf as GL7SublineTypeRF)
  }

}