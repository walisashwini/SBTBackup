package gw.lob.common

enhancement LOBTerritoryCodeEnhancement: entity.TerritoryCode {
  
  function createLookupCriteria(state : Jurisdiction): gw.lob.common.TerritoryLookupCriteria {
    var criteria = this.createLookupCriteria()
    if(state != null){
      var newCriteria = new gw.lob.common.TerritoryLookupCriteria()
      newCriteria.EffectiveOnDate = criteria.EffectiveOnDate
      newCriteria.PolicyLinePatternCode = criteria.PolicyLinePatternCode
      newCriteria.State = state
      criteria = newCriteria
    }
    return criteria
  }

  function fillTerritoryCodeIfSingle() {
    var territories = this.getTerritoryCodes(this.createLookupCriteria())
    if (territories.Count == 1) {
      this.Code = territories[0].Code
    } else {
      this.Code = null
    }
  }
}