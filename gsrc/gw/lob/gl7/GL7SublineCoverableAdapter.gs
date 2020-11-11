package gw.lob.gl7

uses gw.api.domain.CoverableAdapter
uses gw.api.domain.ModifiableAdapter
uses gw.policy.PolicyLineConfiguration
uses entity.GL7SublineCov
uses typekey.Currency
uses entity.PolicyLine
uses entity.GL7SublineCond
uses entity.GL7SublineExcl

@Export
class GL7SublineCoverableAdapter implements CoverableAdapter, ModifiableAdapter {
  
  var _owner : GL7Subline
  delegate _modifiable represents ModifiableAdapter
  
  construct(owner : GL7Subline) {
    _owner = owner
    _modifiable = new GL7SublineModifiableAdapter(owner)
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.SublineType.Line
  }

  override property get State() : Jurisdiction {
    return _owner.Jurisdiction
  }

  override property get PolicyLocations() : PolicyLocation[] {
    return _owner.SublineType.PolicyLocations
  }

  override property get CoveragesFromCoverable() : Coverage[] {
    return _owner.Coverages
  }

  override function addCoverage(cov : Coverage) {
    _owner.addToCoverages(cov as GL7SublineCov)
  }

  override function removeCoverage(cov : Coverage) {
    _owner.removeFromCoverages(cov as GL7SublineCov)
  }

  override property get ExclusionsFromCoverable() : Exclusion[] {
    return _owner.Exclusions
  }

  override function addExclusion(excl : Exclusion) {
    _owner.addToExclusions(excl as GL7SublineExcl)
  }

  override function removeExclusion(excl : Exclusion) {
    _owner.removeFromExclusions(excl as GL7SublineExcl)
  }

  override property get ConditionsFromCoverable() : PolicyCondition[] {
    return _owner.Conditions
  }

  override function addCondition(cond : PolicyCondition) {
    _owner.addToConditions(cond as GL7SublineCond)
  }

  override function removeCondition(cond : PolicyCondition) {
    _owner.removeFromConditions(cond as GL7SublineCond)
  }

  override property get ReferenceDateInternal() : java.util.Date {
    return _owner.ReferenceDateInternal
  }

  override property set ReferenceDateInternal(date : java.util.Date) {
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