package gw.lob.common.financials

uses java.lang.Integer

@Export
class GenericLobCostMethodsImpl<T extends Cost> implements LobCostMethods {

  protected var _owner : T as readonly Cost

  construct(owner : T) {
    _owner = owner
  }

  override property get Coverage() : Coverage {
    return null
  }

  override property get Condition() : PolicyCondition {
    return null
  }

  override property get Exclusion() : Exclusion {
    return null
  }

  override property get OwningCoverable() : Coverable {
    return null
  }

  override property get Jurisdiction(): Jurisdiction {
    return null
  }

  override property get Description(): String {
    return null
  }

  override property get Priority(): Integer {
    return null
  }

  override property get CoverageCategory(): String {
    return Clause.Pattern.CoverageCategory.CodeIdentifier
  }

  override property get Clause(): Clause {
    return Coverage ?: Condition ?: Exclusion
  }
}