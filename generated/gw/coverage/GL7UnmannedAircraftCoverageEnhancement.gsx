package gw.coverage

@javax.annotation.Generated("", "", "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
enhancement GL7UnmannedAircraftCoverageEnhancement : entity.GL7UnmannedAircraft {
  property get GL7UnmannedAircraf () : productmodel.GL7UnmannedAircraf {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7UnmannedAircraf") as com.guidewire.pc.api.productmodel.ClausePatternInternal).getClause(this) as productmodel.GL7UnmannedAircraf
  }
  
  property get GL7UnmannedAircrafExists () : boolean {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7UnmannedAircraf") as com.guidewire.pc.api.productmodel.ClausePatternInternal).hasClause(this)
  }
  
  property get GL7UnmannedAircraftCovABIPD () : productmodel.GL7UnmannedAircraftCovABIPD {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7UnmannedAircraftCovABIPD") as com.guidewire.pc.api.productmodel.ClausePatternInternal).getClause(this) as productmodel.GL7UnmannedAircraftCovABIPD
  }
  
  property get GL7UnmannedAircraftCovABIPDExists () : boolean {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7UnmannedAircraftCovABIPD") as com.guidewire.pc.api.productmodel.ClausePatternInternal).hasClause(this)
  }
  
  property get GL7UnmannedAircraftCovBPAI () : productmodel.GL7UnmannedAircraftCovBPAI {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7UnmannedAircraftCovBPAI") as com.guidewire.pc.api.productmodel.ClausePatternInternal).getClause(this) as productmodel.GL7UnmannedAircraftCovBPAI
  }
  
  property get GL7UnmannedAircraftCovBPAIExists () : boolean {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7UnmannedAircraftCovBPAI") as com.guidewire.pc.api.productmodel.ClausePatternInternal).hasClause(this)
  }
  
  property get GL7UnmannedAircraftTerr () : productmodel.GL7UnmannedAircraftTerr {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7UnmannedAircraftTerr") as com.guidewire.pc.api.productmodel.ClausePatternInternal).getClause(this) as productmodel.GL7UnmannedAircraftTerr
  }
  
  property get GL7UnmannedAircraftTerrExists () : boolean {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7UnmannedAircraftTerr") as com.guidewire.pc.api.productmodel.ClausePatternInternal).hasClause(this)
  }
  
  
}