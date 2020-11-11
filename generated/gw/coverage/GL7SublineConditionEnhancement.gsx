package gw.coverage

@javax.annotation.Generated("", "", "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
enhancement GL7SublineConditionEnhancement : entity.GL7Subline {
  property get GL7ChangesNotificationRequirementForOwnersAndPosse () : productmodel.GL7ChangesNotificationRequirementForOwnersAndPosse {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7ChangesNotificationRequirementForOwnersAndPosse") as com.guidewire.pc.api.productmodel.ClausePatternInternal).getClause(this) as productmodel.GL7ChangesNotificationRequirementForOwnersAndPosse
  }
  
  property get GL7ChangesNotificationRequirementForOwnersAndPosseExists () : boolean {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7ChangesNotificationRequirementForOwnersAndPosse") as com.guidewire.pc.api.productmodel.ClausePatternInternal).hasClause(this)
  }
  
  property get GL7PolicyChangesExceptions () : productmodel.GL7PolicyChangesExceptions {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7PolicyChangesExceptions") as com.guidewire.pc.api.productmodel.ClausePatternInternal).getClause(this) as productmodel.GL7PolicyChangesExceptions
  }
  
  property get GL7PolicyChangesExceptionsExists () : boolean {
    return (gw.api.productmodel.ClausePatternLookup.getByPublicID("GL7PolicyChangesExceptions") as com.guidewire.pc.api.productmodel.ClausePatternInternal).hasClause(this)
  }
  
  
}