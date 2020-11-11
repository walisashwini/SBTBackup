package gw.lob.gl7

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractModifierMatcher

uses java.lang.Iterable

@Export
class GL7SublineModifierMatcher extends AbstractModifierMatcher<GL7SublineMod> {

  construct(owner : GL7SublineMod) {
    super(owner)
  }
  
  override property get ParentColumns() : Iterable<ILinkPropertyInfo> {
    return { GL7SublineMod#GL7Subline.PropertyInfo as ILinkPropertyInfo }
  }

}