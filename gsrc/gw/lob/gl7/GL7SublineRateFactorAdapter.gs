package gw.lob.gl7

uses gw.api.domain.RateFactorAdapter

@Export
class GL7SublineRateFactorAdapter implements RateFactorAdapter {
  var _owner : GL7SublineRF
  
  construct(rateFactor : GL7SublineRF) {
    _owner = rateFactor
  }

  override property get Modifier() : Modifier {
    return _owner.GL7SublineModifier
  }

}