package gw.lob.gl7.schedules

uses gw.coverage.CoverageAdapterBase
uses gw.api.reinsurance.ReinsurableCoverable

@Export
class GL7UAircrSchedExclItemCovAdapter extends CoverageAdapterBase {
  var _owner : GL7UAircrSchedExclItemCov  
  
  construct(owner : GL7UAircrSchedExclItemCov)  {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction  {
    return _owner.UAircrSchedExclItem.CoverableState
  }

  override property get PolicyLine() : PolicyLine  {
    return _owner.UAircrSchedExclItem.Schedule.PolicyLine
  }

  override property get OwningCoverable() : Coverable  {
    return _owner.UAircrSchedExclItem
  }

  
  override function addToCoverageArray( clause: Coverage )  {
    _owner.UAircrSchedExclItem.addToCoverages(clause as GL7UAircrSchedExclItemCov)
  }

  override function removeFromParent()  {
    _owner.UAircrSchedExclItem.removeCoverageFromCoverable(_owner)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return _owner.BranchValue
  }
}