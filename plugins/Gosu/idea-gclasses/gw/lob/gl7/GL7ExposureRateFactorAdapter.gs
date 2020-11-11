package gw.lob.gl7

uses gw.api.domain.RateFactorAdapter

@Export
class GL7ExposureRateFactorAdapter implements RateFactorAdapter {

  var _owner : GL7ExposureRF

  construct(rateFactor : GL7ExposureRF) {
    _owner = rateFactor
  }

  override property get Modifier() : Modifier {
    return _owner.GL7ExposureModifier
  }
}