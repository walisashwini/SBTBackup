package gw.lob.gl7

uses gw.api.domain.ModifiableAdapter
uses gw.lob.common.adapters.LocationBasedCoverableAdapter
uses gw.policy.PolicyLineConfiguration

uses java.util.Date

@Export
class GL7LocationCoverableAdapter extends LocationBasedCoverableAdapter<GL7Location> implements ModifiableAdapter {

  delegate _modifiable represents ModifiableAdapter

  construct(owner : GL7Location) {
    super(owner)
    _modifiable = new GL7LocationModifiableAdapter(owner)
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.SublineType.Line
  }

  override property get Location(): PolicyLocation {
    return _owner.Location
  }

  override property get CoveragesFromCoverable(): Coverage[] {
    return _owner.Coverages
  }

  override function addCoverage( p0: Coverage ) : void {
    _owner.addToCoverages( p0 as GL7LocationCov )
  }

  override function removeCoverage( p0: Coverage ) : void {
    _owner.removeFromCoverages( p0 as GL7LocationCov )
  }

  override property get ExclusionsFromCoverable() : Exclusion[] {
    return _owner.Exclusions
  }

  override function addExclusion( p0: Exclusion ) : void {
    _owner.addToExclusions( p0 as GL7LocationExcl )
  }

  override function removeExclusion( p0: Exclusion ) : void {
    _owner.removeFromExclusions( p0 as GL7LocationExcl )
  }
  override property get ConditionsFromCoverable() : PolicyCondition[] {
    return _owner.Conditions
  }

  override function addCondition( p0: PolicyCondition ) : void {
    _owner.addToConditions( p0 as GL7LocationCond )
  }

  override function removeCondition( p0: PolicyCondition ) : void {
    _owner.removeFromConditions( p0 as GL7LocationCond )
  }

  override property get ReferenceDateInternal() : Date {
    return _owner.ReferenceDateInternal
  }
  
  override property set ReferenceDateInternal( date : Date )  {
    _owner.ReferenceDateInternal = date
  }

  override property get DefaultCurrency() : Currency {
    return _owner.Branch.PreferredCoverageCurrency
  }

  override property get AllowedCurrencies() : List<Currency> {
    return PolicyLineConfiguration.getByLine(InstalledPolicyLine.TC_GL7).AllowedCurrencies
  }

}
