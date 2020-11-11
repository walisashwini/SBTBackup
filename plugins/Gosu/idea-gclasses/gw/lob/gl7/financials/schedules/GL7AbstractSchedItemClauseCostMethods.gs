package gw.lob.gl7.financials.schedules

uses gw.api.domain.Clause
uses java.lang.Integer

class GL7AbstractSchedItemClauseCostMethods<T extends Cost, S extends ScheduledItem & Coverable, R extends Clause> extends GL7AbstractSchedItemCostMethods<T, S> {

  protected var _clause : R

  construct(owner: T, schedItem : S, clause : R) {
    super(owner, schedItem)
    _schedItem = schedItem
    _clause = clause
  }

  override property get Coverage(): Coverage {
    if (_clause typeis Coverage) {
      return _clause
    }
    return null
  }

  override property get Exclusion(): Exclusion {
    if (_clause typeis Exclusion) {
      return _clause
    }
    return null
  }

  override property get Condition(): PolicyCondition {
    if (_clause typeis PolicyCondition) {
      return _clause
    }
    return null
  }

  override public property get Priority(): Integer {
    return _clause.Pattern.Priority
  }

  override public property get Description(): String {
    return _clause.Pattern.Name
  }

}