package gw.lob.gl7

uses gw.coverage.ConditionAdapterBase

@Export
class GL7LocationCondConditionAdapter extends ConditionAdapterBase
{
  var _owner : GL7LocationCond  
  
  construct(owner : GL7LocationCond)
  {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction
  {
    return OwningCoverable.CoverableState
  }

  override property get PolicyLine() : PolicyLine
  {
    return _owner.GL7Location.SublineType.Line
  }

  override property get OwningCoverable() : Coverable
  {
    return _owner.GL7Location
  }

  override function addToConditionArray( p0: PolicyCondition ) : void
  {
    _owner.GL7Location.addToConditions( p0 as GL7LocationCond )
  }

  override function removeFromParent() : void
  {
    _owner.GL7Location.removeFromConditions( _owner )
  }

}
