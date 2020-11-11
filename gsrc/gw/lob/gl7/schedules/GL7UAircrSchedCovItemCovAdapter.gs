package gw.lob.gl7.schedules

uses gw.coverage.CoverageAdapterBase
uses gw.api.reinsurance.ReinsurableCoverable

@Export
class GL7UAircrSchedCovItemCovAdapter extends CoverageAdapterBase {
  var _owner : GL7UAircrSchedCovItemCov  
  
  construct(owner : GL7UAircrSchedCovItemCov)  {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction  {
    return _owner.UAircrSchedCovItem.CoverableState
  }

  override property get PolicyLine() : PolicyLine  {
    return _owner.UAircrSchedCovItem.Schedule.PolicyLine
  }

  override property get OwningCoverable() : Coverable  {
    return _owner.UAircrSchedCovItem
  }

  
  override function addToCoverageArray( clause: Coverage )  {
    _owner.UAircrSchedCovItem.addToCoverages(clause as GL7UAircrSchedCovItemCov)
  }

  override function removeFromParent()  {
    _owner.UAircrSchedCovItem.removeCoverageFromCoverable(_owner)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return _owner.BranchValue
  }
}