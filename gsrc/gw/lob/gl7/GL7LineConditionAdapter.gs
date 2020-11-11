package gw.lob.gl7

uses gw.coverage.ConditionAdapterBase

@Export
class GL7LineConditionAdapter extends ConditionAdapterBase {

  var _owner : GL7LineCond

  construct(owner : GL7LineCond) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return _owner.GL7Line.Branch.BaseState
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7Line
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7Line
  }

  override function addToConditionArray(cond : PolicyCondition) {
    _owner.GL7Line.addToConditions(cond as GL7LineCond)
  }

  override function removeFromParent() {
    _owner.GL7Line.removeFromConditions(_owner)
  }

}