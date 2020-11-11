package gw.lob.gl7

uses gw.coverage.ExclusionAdapterBase

@Export
class GL7LocationExclExclusionAdapter extends ExclusionAdapterBase
{
  var _owner : GL7LocationExcl  
  
  construct(owner : GL7LocationExcl)
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

  override function addToExclusionArray( p0: Exclusion ) : void
  {
    _owner.GL7Location.addToExclusions( p0 as GL7LocationExcl )
  }

  override function removeFromParent() : void
  {
    _owner.GL7Location.removeFromExclusions( _owner )
  }

}
