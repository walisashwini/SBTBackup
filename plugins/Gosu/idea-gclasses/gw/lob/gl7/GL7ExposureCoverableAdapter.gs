package gw.lob.gl7

uses gw.api.domain.ModifiableAdapter
uses gw.lob.common.adapters.LocationBasedCoverableAdapter
uses gw.policy.PolicyLineConfiguration

uses java.util.Date

@Export
class GL7ExposureCoverableAdapter extends LocationBasedCoverableAdapter<GL7Exposure> implements ModifiableAdapter {

  delegate _modifiable represents ModifiableAdapter

  construct(owner : GL7Exposure) {
    super(owner)
    _modifiable = new GL7ExposureModifiableAdapter(owner)
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.Branch.GL7Line
  }

  override property get Location(): PolicyLocation {
    return _owner.GL7Location.Location
  }

  override property get CoveragesFromCoverable(): Coverage[] {
    return _owner.Coverages
  }

  override function addCoverage(p0 : Coverage) {
    _owner.addToCoverages(p0 as GL7ExposureCov)
  }

  override function removeCoverage(p0 : Coverage) {
    _owner.removeFromCoverages(p0 as GL7ExposureCov)
  }

  override property get ExclusionsFromCoverable() : Exclusion[] {
    return _owner.Exclusions
  }

  override function addExclusion( p0: Exclusion ) {
    _owner.addToExclusions( p0 as GL7ExposureExcl )
  }

  override function removeExclusion(p0 : Exclusion) {
    _owner.removeFromExclusions(p0 as GL7ExposureExcl)
  }
  
  override property get ConditionsFromCoverable() : PolicyCondition[] {
    return _owner.Conditions
  }

  override function addCondition(p0 : PolicyCondition) {
    _owner.addToConditions(p0 as GL7ExposureCond)
  }

  override function removeCondition(p0 : PolicyCondition) {
    _owner.removeFromConditions(p0 as GL7ExposureCond)
  }

  override property get ReferenceDateInternal() : Date {
    return _owner.ReferenceDateInternal
  }
  
  override property set ReferenceDateInternal(date : Date)  {
    _owner.ReferenceDateInternal = date
  }

  override property get DefaultCurrency() : Currency {
    return _owner.Branch.PreferredCoverageCurrency
  }

  override property get AllowedCurrencies() : List<Currency> {
    return PolicyLineConfiguration.getByLine(InstalledPolicyLine.TC_GL7).AllowedCurrencies
  }

}