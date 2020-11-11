package gw.lob.gl7

uses gw.api.domain.ModifiableAdapter

uses java.util.Date

@Export
class GL7SublineTypeModifiableAdapter implements ModifiableAdapter {

  var _owner : GL7SublineType
  
  construct(owner : GL7SublineType) {
    _owner = owner
  }

  override property get AllModifiers() : Modifier[] {
    return _owner.Modifiers
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.Line
  }

  override property get PolicyPeriod() : PolicyPeriod {
    return _owner.Branch
  }

  override property get State() : Jurisdiction {
    return _owner.Branch.BaseState
  }

  override function addToModifiers(mod : Modifier) {
    _owner.addToModifiers(mod as GL7SublineTypeMod)
  }

  override function removeFromModifiers(mod : Modifier) {
    _owner.removeFromModifiers(mod as GL7SublineTypeMod)
  }

  override function createRawModifier() : Modifier {
    return new GL7SublineTypeMod(_owner.Branch)
  }

  override function postUpdateModifiers() {
  }

  override property get ReferenceDateInternal() : Date {
    return _owner.Line.ReferenceDateInternal
  }

  override property set ReferenceDateInternal(date : Date) {
    _owner.Line.ReferenceDateInternal = date
  }

}