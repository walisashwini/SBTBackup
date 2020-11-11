package gw.lob.gl7

uses gw.api.domain.ModifiableAdapter
uses java.util.Date

@Export
class GL7ExposureModifiableAdapter implements ModifiableAdapter {
  var _owner : GL7Exposure
  
  construct(owner : GL7Exposure) {
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
    _owner.addToGL7ExposureMods(p0 as GL7ExposureMod)
  }

  override function removeFromModifiers(p0 : Modifier) {
    _owner.removeFromGL7ExposureMods(p0 as GL7ExposureMod)
  }

  override function createRawModifier() : Modifier {
    return new GL7ExposureMod(_owner.Branch)
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
