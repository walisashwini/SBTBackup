package gw.lob.gl7.validation

uses entity.PolicyLine
uses gw.api.domain.covterm.CovTerm
uses gw.api.domain.covterm.OptionCovTerm
uses gw.api.productmodel.CovTermPattern
uses gw.api.productmodel.OptionCovTermPattern
uses typekey.Currency

class GL7SublineTypeCovWithState extends entity.GL7SublineTypeCov implements entity.Clause {
  delegate _originalClause represents entity.Clause
  var _coverable: CoverableWithState

  construct(clause : entity.Clause, jurisdiction: Jurisdiction) {
    super(clause.PolicyLine.Branch, clause.Pattern.CodeIdentifier)
    _originalClause = clause
    _coverable = new CoverableWithState(clause.OwningCoverable, jurisdiction)
    _coverable.remove()
    this.remove()
  }

  override property get OwningCoverable(): entity.Coverable {
    return _coverable
  }

  override property get PolicyLine(): PolicyLine {
    return _originalClause.PolicyLine
  }

  override property get Currency(): Currency {
    return _originalClause.Currency
  }

  override property get ReferenceDate(): Date {
    return _originalClause.ReferenceDate
  }

  override function getCovTerm(pattern: CovTermPattern): CovTerm {
    return _originalClause.getCovTerm(pattern)
  }

  override function hasCovTermByCodeIdentifier(patternCodeIdentifier: String) : boolean {
    return _originalClause.hasCovTermByCodeIdentifier(patternCodeIdentifier)
  }

  function wrapCovTerm(term: OptionCovTerm): OptionCovTerm {
    var constructor = (typeof term).TypeInfo.getCallableConstructor( {OptionCovTermPattern, entity.Clause} ).Constructor
    var termWithState = constructor.newInstance( {term.Pattern, this} ) as OptionCovTerm
    termWithState.OptionValue = term.OptionValue

    return termWithState
  }

  class CoverableWithState extends entity.GL7SublineType implements entity.Coverable {
    delegate _originalCoverable represents entity.Coverable
    var _state: Jurisdiction

    construct(coverable : entity.Coverable, jurisdiction: Jurisdiction) {
      super(coverable.PolicyLine.Branch)
      _state = jurisdiction
      _originalCoverable = coverable
    }

    override property get CoverableState(): Jurisdiction {
      return _state
    }

    override property get PolicyLine(): PolicyLine {
      return _originalCoverable.PolicyLine
    }
  }
}
