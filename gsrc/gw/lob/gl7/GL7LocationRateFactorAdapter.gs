package gw.lob.gl7

uses gw.api.domain.RateFactorAdapter

@Export
class GL7LocationRateFactorAdapter implements RateFactorAdapter {

  var _owner : GL7LocationRF

  construct(rateFactor : GL7LocationRF) {
    _owner = rateFactor
  }

  override property get Modifier() : Modifier {
    return _owner.GL7LocationModifier
  }
}