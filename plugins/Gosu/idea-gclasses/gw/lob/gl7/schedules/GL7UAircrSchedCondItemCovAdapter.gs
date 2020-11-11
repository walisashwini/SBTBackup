package gw.lob.gl7.schedules

uses gw.coverage.CoverageAdapterBase
uses gw.api.reinsurance.ReinsurableCoverable

@Export
class GL7UAircrSchedCondItemCovAdapter extends CoverageAdapterBase {
  var _owner : GL7UAircrSchedCondItemCov  
  
  construct(owner : GL7UAircrSchedCondItemCov)  {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction  {
    return _owner.UAircrSchedCondItem.CoverableState
  }

  override property get PolicyLine() : PolicyLine  {
    return _owner.UAircrSchedCondItem.Schedule.PolicyLine
  }

  override property get OwningCoverable() : Coverable  {
    return _owner.UAircrSchedCondItem
  }

  
  override function addToCoverageArray( clause: Coverage )  {
    _owner.UAircrSchedCondItem.addToCoverages(clause as GL7UAircrSchedCondItemCov)
  }

  override function removeFromParent()  {
    _owner.UAircrSchedCondItem.removeCoverageFromCoverable(_owner)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return _owner.BranchValue
  }
}