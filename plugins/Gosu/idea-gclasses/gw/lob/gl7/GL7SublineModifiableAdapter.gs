package gw.lob.gl7

uses gw.api.domain.ModifiableAdapter
uses java.util.Date

@Export
class GL7SublineModifiableAdapter implements ModifiableAdapter {
  var _owner : GL7Subline
  
  construct(owner : GL7Subline) {
    _owner = owner
  }

  override property get AllModifiers() : Modifier[] {
    return _owner.Modifiers
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.SublineType.Line
  }

  override property get PolicyPeriod() : PolicyPeriod {
    return _owner.SublineType.Branch
  }

  override property get State() : Jurisdiction {
    return _owner.Jurisdiction
  }

  override function addToModifiers(mod : Modifier) {
    _owner.addToModifiers(mod as GL7SublineMod)
  }

  override function removeFromModifiers(mod : Modifier) {
    _owner.removeFromModifiers(mod as GL7SublineMod)
  }

  override function createRawModifier() : Modifier {
    return new GL7SublineMod(_owner.Branch)
  }

  override function postUpdateModifiers() {
  }

  override property get ReferenceDateInternal() : Date {
    return _owner.SublineType.Line.ReferenceDateInternal
  }

  override property set ReferenceDateInternal(date : Date) {
    _owner.SublineType.Line.ReferenceDateInternal = date
  }

}