package gw.coverage

@javax.annotation.Generated("", "", "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
enhancement GL7ExposureExclusionEnhancement : entity.GL7Exposure {
  property get GL7CanoesOrRowboats () : productmodel.GL7CanoesOrRowboats {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7CanoesOrRowboats") as com.guidewire.pc.api.productmodel.ClausePatternInternal).getClause(this) as productmodel.GL7CanoesOrRowboats
  }
  
  property get GL7CanoesOrRowboatsExists () : boolean {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7CanoesOrRowboats") as com.guidewire.pc.api.productmodel.ClausePatternInternal).hasClause(this)
  }
  
  property get GL7ExclCovCMedPayLocClassLvl1 () : productmodel.GL7ExclCovCMedPayLocClassLvl1 {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7ExclCovCMedPayLocClassLvl1") as com.guidewire.pc.api.productmodel.ClausePatternInternal).getClause(this) as productmodel.GL7ExclCovCMedPayLocClassLvl1
  }
  
  property get GL7ExclCovCMedPayLocClassLvl1Exists () : boolean {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7ExclCovCMedPayLocClassLvl1") as com.guidewire.pc.api.productmodel.ClausePatternInternal).hasClause(this)
  }
  
  property get GL7SnowplowOps () : productmodel.GL7SnowplowOps {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7SnowplowOps") as com.guidewire.pc.api.productmodel.ClausePatternInternal).getClause(this) as productmodel.GL7SnowplowOps
  }
  
  property get GL7SnowplowOpsExists () : boolean {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7SnowplowOps") as com.guidewire.pc.api.productmodel.ClausePatternInternal).hasClause(this)
  }
  
  
}