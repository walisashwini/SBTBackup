package gw.lob.common.financials

uses java.lang.Integer

/**
 * Additional methods and properties provided by the costs that supply this interface.
 */
@Export
structure LobCostMethods {
  property get Coverage() : Coverage
  property get Condition() : PolicyCondition
  property get Exclusion() : Exclusion
  property get OwningCoverable() : Coverable
  property get Jurisdiction() : Jurisdiction
  property get Description() : String
  property get Priority() : Integer
  property get CoverageCategory(): String
  property get Clause(): Clause
}