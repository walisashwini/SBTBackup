package gw.lob.common.dependency

uses gw.lob.common.LobPropertyService
uses gw.lob.common.MultistateAvailabilityCoverable

enhancement CoverableAvailabilityEnhancement: entity.Coverable {

  /**
   * Check if Clause is available, true if no dependency is found
   */
  function isClauseAvailable(clauseCode: String): boolean {
    if(this typeis MultistateAvailabilityCoverable){
      return this.isClauseMultistateAvailable(clauseCode)
    }
    return LobPropertyService.Instance.isClauseAvailable(this, clauseCode)
  }

  /**
   * Check if Cov Term is available, true if no dependency is found
   */
  function isCovTermAvailable(clauseCode: String, covTermCode: String) : boolean {
    if(this typeis MultistateAvailabilityCoverable){
      return this.isCovTermMultistateAvailable(clauseCode, covTermCode)
    }
    return LobPropertyService.Instance.isCovTermAvailable(this, clauseCode, covTermCode)
  }
}
