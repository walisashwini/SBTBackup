package gw.lob.gl7

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractRateFactorMatcher

uses java.lang.Iterable

@Export
class GL7SublineTypeRateFactorMatcher extends AbstractRateFactorMatcher<GL7SublineTypeRF> {

  construct(owner : GL7SublineTypeRF) {
    super(owner)
  }

  override property get ParentColumns() : Iterable<ILinkPropertyInfo> {
    return {GL7SublineTypeRF#GL7SublineTypeModifier.PropertyInfo as ILinkPropertyInfo}
  }
}