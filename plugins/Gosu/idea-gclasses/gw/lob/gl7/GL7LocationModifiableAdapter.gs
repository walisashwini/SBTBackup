package gw.lob.gl7

uses gw.api.domain.ModifiableAdapter
uses java.util.Date

@Export
class GL7LocationModifiableAdapter implements ModifiableAdapter {
  var _owner : GL7Location

  construct(owner : GL7Location) {
    _owner = owner
  }

  override property get AllModifiers() : Modifier[] {
    return _owner.Modifiers
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.Branch.GL7Line
  }

  override property get PolicyPeriod() : PolicyPeriod {
    return _owner.Branch
  }

  override property get State() : Jurisdiction{
    return _owner.Branch.BaseState
  }

  override function addToModifiers(p0 : Modifier) {
    _owner.addToGL7LocationMods(p0 as GL7LocationMod)
  }

  override function removeFromModifiers(p0 : Modifier) {
    _owner.removeFromGL7LocationMods(p0 as GL7LocationMod)
  }

  override function createRawModifier() : Modifier {
    return new GL7LocationMod(_owner.Branch)
  }

  override function postUpdateModifiers() {
  }

  override property get ReferenceDateInternal() : Date {
    return _owner.Branch.GL7Line.ReferenceDateInternal
  }

  override property set ReferenceDateInternal(date : Date) {
    _owner.Branch.GL7Line.ReferenceDateInternal = date
  }
}
