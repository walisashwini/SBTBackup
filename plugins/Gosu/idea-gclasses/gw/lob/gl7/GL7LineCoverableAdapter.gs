package gw.lob.gl7

uses gw.api.domain.CoverableAdapter
uses gw.api.domain.ModifiableAdapter
uses gw.policy.PolicyLineConfiguration
uses entity.GL7LineCond
uses entity.GL7LineExcl
uses typekey.Currency
uses entity.PolicyLine
uses entity.GL7LineCov

@Export
class GL7LineCoverableAdapter implements CoverableAdapter, ModifiableAdapter {
  
  var _owner : GL7GeneralLiabilityLine
  delegate _modifiable represents ModifiableAdapter

  construct(owner : GL7GeneralLiabilityLine) {
    _owner = owner
    _modifiable = new GL7LineModifiableAdapter(owner)
  }

  override property get PolicyLine() : PolicyLine {
    return _owner
  }

  override property get State() : Jurisdiction {
    return _owner.Branch.BaseState
  }

  override property get PolicyLocations() : PolicyLocation[] {
    var locs = new HashSet<PolicyLocation>()

    return locs.toTypedArray()
  }

  override property get CoveragesFromCoverable() : Coverage[] {
    return _owner.Coverages
  }

  override function addCoverage(cov : Coverage) {
    _owner.addToCoverages(cov as GL7LineCov)
  }

  override function removeCoverage(cov : Coverage ) {
    _owner.removeFromCoverages(cov as GL7LineCov)
  }

  override property get ExclusionsFromCoverable() : Exclusion[] {
    return _owner.Exclusions
  }

  override function addExclusion(excl : Exclusion) {
    _owner.addToExclusions(excl as GL7LineExcl)
  }

  override function removeExclusion(excl : Exclusion) {
    _owner.removeFromExclusions(excl as GL7LineExcl)
  }

  override property get ConditionsFromCoverable() : PolicyCondition[] {
    return _owner.Conditions
  }

  override function addCondition(cond : PolicyCondition ) {
    _owner.addToConditions(cond as GL7LineCond)
  }

  override function removeCondition(cond : PolicyCondition) {
    _owner.removeFromConditions(cond as GL7LineCond)
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

  override property get AssociatedCoveragePartTypes() : CoveragePartType[] {
    return new CoveragePartType[0]
  }
}
