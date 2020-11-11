package gw.lob.gl7

uses gw.api.domain.ModifierAdapter

@Export
class GL7ExposureModifierAdapter implements ModifierAdapter {

  var _owner : GL7ExposureMod

  construct(owner : GL7ExposureMod) {
    _owner = owner
  }

  override property get OwningModifiable() : Modifiable {
    return _owner.GL7Exposure
  }

  override property get RateFactors() : RateFactor[] {
    return _owner.GL7ExposureRateFactors
  }

  override function addToRateFactors(rf : RateFactor) {
    _owner.addToGL7ExposureRateFactors(rf as GL7ExposureRF)
  }

  override function createRawRateFactor() : RateFactor {
    return new GL7ExposureRF(_owner.Branch)
  }

  override function removeFromRateFactors(rf : RateFactor) {
    _owner.removeFromGL7ExposureRateFactors(rf as GL7ExposureRF)
  }
}