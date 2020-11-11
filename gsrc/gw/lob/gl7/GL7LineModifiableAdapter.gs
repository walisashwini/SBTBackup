package gw.lob.gl7

uses gw.api.domain.ModifiableAdapter

uses java.util.Date

@Export
class GL7LineModifiableAdapter implements ModifiableAdapter {

  var _owner : GL7GeneralLiabilityLine

  construct(owner : GL7GeneralLiabilityLine) {
    _owner = owner
  }

  override property get AllModifiers() : Modifier[] {
    return _owner.Modifiers
  }

  override property get PolicyLine() : PolicyLine {
    return _owner
  }

  override property get PolicyPeriod() : PolicyPeriod {
    return _owner.Branch
  }

  override property get State() : Jurisdiction {
    return _owner.Branch.BaseState
  }

  override function addToModifiers(mod : Modifier) {
    _owner.addToModifiers(mod as GL7LineMod)
  }

  override function removeFromModifiers(mod : Modifier) {
    _owner.removeFromModifiers(mod as GL7LineMod)
  }

  override function createRawModifier() : Modifier {
    return new GL7LineMod(_owner.Branch)
  }

  override function postUpdateModifiers() {
  }

  override property get ReferenceDateInternal() : Date {
    return _owner.ReferenceDateInternal
  }

  override property set ReferenceDateInternal(date : Date) {
    _owner.ReferenceDateInternal = date
  }

}