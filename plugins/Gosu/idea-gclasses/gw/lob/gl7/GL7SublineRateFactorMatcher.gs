package gw.lob.gl7

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractRateFactorMatcher

uses java.lang.Iterable

@Export
class GL7SublineRateFactorMatcher extends AbstractRateFactorMatcher<GL7SublineRF> {

  construct(owner : GL7SublineRF) {
    super(owner)
  }

  override property get ParentColumns() : Iterable<ILinkPropertyInfo> {
    return { GL7SublineRF#GL7SublineModifier.PropertyInfo as ILinkPropertyInfo }
  }

}