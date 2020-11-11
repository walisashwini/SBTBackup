package gw.lob.gl7

uses gw.coverage.ConditionAdapterBase

@Export
class GL7SublineConditionAdapter extends ConditionAdapterBase {
  var _owner : GL7SublineCond
  
  construct(owner : GL7SublineCond) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return _owner.GL7Subline.Jurisdiction
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7Subline.SublineType.Line
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7Subline
  }

  override function addToConditionArray(cond : PolicyCondition) {
    _owner.GL7Subline.addToConditions(cond as GL7SublineCond)
  }

  override function removeFromParent() {
    _owner.GL7Subline.removeFromConditions(_owner)
  }

}