package gw.lob.gl7.financials
uses gw.api.domain.financials.CostAdapter
uses gw.api.reinsurance.ReinsurableCoverable

@Export
class GL7CostAdapter implements CostAdapter
{
  var _owner : GL7Cost
  construct(owner : GL7Cost) { _owner = owner }

  override function createTransaction( branch : PolicyPeriod ) : Transaction
  {
    var transaction = new GL7Transaction( branch, branch.PeriodStart, branch.PeriodEnd )
    transaction.GL7Cost = _owner.Unsliced
    return transaction
  }

  override property get Reinsurable() : Reinsurable {
    if (_owner.Coverage == null) {
      return null
    }
    
    var rCov : ReinsurableCoverable = _owner.Coverage.ReinsurableCoverable
    var candidates = rCov.Reinsurables.where(\ r -> r.CoverageGroup == _owner.Coverage.RICoverageGroupType)
    return candidates.HasElements ? candidates.single() : null
  }
  
  override property get Coverable() : Coverable {
    return _owner.OwningCoverable
  }

  override property get NameOfCoverable() : String {
    if (_owner.OwningCoverable!=null) {
	  return _owner.OwningCoverable.DisplayName
	}
	return ""
  }

  override function isMatchingBean(bean : KeyableBean) : boolean {
    return false
  }

  override property get PolicyLine(): entity.PolicyLine {
    return _owner.GL7Line
  }
}
