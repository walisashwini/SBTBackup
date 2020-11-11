package gw.lob.gl7

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractRateFactorMatcher

uses java.lang.Iterable

@Export
class GL7LineRateFactorMatcher extends AbstractRateFactorMatcher<GL7LineRF> {

  construct(owner : GL7LineRF) {
    super(owner)
  }

  override property get ParentColumns() : Iterable<ILinkPropertyInfo> {
    return {GL7LineRF#GL7LineModifier.PropertyInfo as ILinkPropertyInfo}
  }

}