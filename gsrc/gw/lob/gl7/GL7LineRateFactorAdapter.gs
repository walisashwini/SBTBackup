package gw.lob.gl7

uses gw.api.domain.RateFactorAdapter

@Export
class GL7LineRateFactorAdapter implements RateFactorAdapter {

  var _owner : GL7LineRF

  construct(rateFactor : GL7LineRF) {
    _owner = rateFactor
  }

  override property get Modifier() : Modifier {
    return _owner.GL7LineModifier
  }

}