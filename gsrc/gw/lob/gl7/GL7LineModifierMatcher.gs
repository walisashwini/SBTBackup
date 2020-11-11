package gw.lob.gl7

uses gw.entity.ILinkPropertyInfo
uses gw.lob.common.AbstractModifierMatcher

uses java.lang.Iterable

@Export
class GL7LineModifierMatcher extends AbstractModifierMatcher<GL7LineMod> {

  construct(owner : GL7LineMod) {
    super(owner)
  }

  override property get ParentColumns() : Iterable<ILinkPropertyInfo> {
    return {GL7LineMod#GL7Line as ILinkPropertyInfo}
  }

}