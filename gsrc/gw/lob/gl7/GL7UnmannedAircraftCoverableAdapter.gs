package gw.lob.gl7

uses gw.api.domain.CoverableAdapter
uses java.util.Date
uses gw.policy.PolicyLineConfiguration

@Export
class GL7UnmannedAircraftCoverableAdapter implements CoverableAdapter {
  var _owner : GL7UnmannedAircraft

  construct(owner : GL7UnmannedAircraft) {
    _owner = owner
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.Branch.GL7Line
  }

  override property get PolicyLocations() : PolicyLocation[] {
    return new PolicyLocation[] {_owner.Exposure.PolicyLocations.single()}
  }

  override property get State() : Jurisdiction {
    return (_owner.Exposure.CoverableState)
  }

  override property get CoveragesFromCoverable() : Coverage[] {
    return _owner.Coverages
  }

  override function addCoverage(p0: Coverage) : void {
    _owner.addToCoverages(p0 as GL7UnmannedAircraftCov)
  }

  override function removeCoverage(p0: Coverage) : void {
    _owner.removeFromCoverages(p0 as GL7UnmannedAircraftCov)
  }
  override property get ExclusionsFromCoverable() : Exclusion[] {
    return _owner.Exclusions
  }

  override function addExclusion(p0: Exclusion) : void {
    _owner.addToExclusions(p0 as GL7UnmannedAircraftExcl)
  }

  override function removeExclusion(p0: Exclusion) : void {
    _owner.removeFromExclusions(p0 as GL7UnmannedAircraftExcl)
  }
  override property get ConditionsFromCoverable() : PolicyCondition[] {
    return _owner.Conditions
  }

  override function addCondition(p0: PolicyCondition) : void {
    _owner.addToConditions(p0 as GL7UnmannedAircraftCond)
  }

  override function removeCondition(p0: PolicyCondition) : void {
    _owner.removeFromConditions(p0 as GL7UnmannedAircraftCond)
  }

  override property get DefaultCurrency() : Currency {
    return _owner.Branch.PreferredCoverageCurrency
  }

  override property get AllowedCurrencies() : List<Currency> {
    return PolicyLineConfiguration.getByLine(InstalledPolicyLine.TC_GL7).AllowedCurrencies
  }

  override property get AssociatedCoveragePartTypes() : CoveragePartType[] {
    return new CoveragePartType[0]
  }
}