package gw.lob.common

uses gw.lob.common.TerritoryLookupCriteria
uses gw.api.locale.DisplayKey

@Export
class JurisdictionFreeTerritoryLookupCriteria extends TerritoryLookupCriteria {
  override protected property get MinimumSearchCriteriaMessage() : String {
    if (PolicyLinePatternCode.NotBlank and EffectiveOnDate != null) {
      return null
    }
    return DisplayKey.get("TerritoryLookupCriteria.Error.MinimumCriteria")
  }
}