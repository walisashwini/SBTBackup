package gw.lob.gl7

uses gw.api.domain.RateFactorAdapter

@Export
class GL7SublineTypeRateFactorAdapter implements RateFactorAdapter {

  var _owner : GL7SublineTypeRF
  
  construct(rateFactor : GL7SublineTypeRF) {
    _owner = rateFactor
  }

  override property get Modifier() : Modifier {
    return _owner.GL7SublineTypeModifier
  }

}