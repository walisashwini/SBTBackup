package gw.lob.gl7

uses gw.coverage.ConditionAdapterBase

@Export
class GL7SublineTypeConditionAdapter extends ConditionAdapterBase {

  var _owner : GL7SublineTypeCond
  
  construct(owner : GL7SublineTypeCond) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return _owner.GL7SublineType.Branch.BaseState
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7SublineType.Line
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7SublineType
  }

  override function addToConditionArray(cond : PolicyCondition) {
    _owner.GL7SublineType.addToConditions(cond as GL7SublineTypeCond)
  }

  override function removeFromParent() {
    _owner.GL7SublineType.removeFromConditions(_owner)
  }

}