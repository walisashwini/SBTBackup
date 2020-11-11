package gw.lob.gl7

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractModifierMatcher

uses java.lang.Iterable

@Export
class GL7SublineTypeModifierMatcher extends AbstractModifierMatcher<GL7SublineTypeMod> {

  construct(owner : GL7SublineTypeMod) {
    super(owner)
  }
  
  override property get ParentColumns() : Iterable<ILinkPropertyInfo> {
    return {GL7SublineTypeMod#GL7SublineType.PropertyInfo as ILinkPropertyInfo}
  }

}