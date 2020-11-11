package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "GL7GeneralLiabilityLine.eti;GL7GeneralLiabilityLine.eix;GL7GeneralLiabilityLine.etx")
enhancement GWGL7GeneralLiabilityLineEntityEnhancement : entity.GL7GeneralLiabilityLine {
  function clearOverridesForAudit () : void {
    (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.LobPolicyLineMethods") as gw.lob.common.LobPolicyLineMethods).clearOverridesForAudit()
  }
  
  property get Constraint () : gw.lob.common.dependency.GraphTraversalConstraint {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.LobCoverable") as gw.lob.common.LobCoverable).Constraint
  }
  
  property get CustomAnswerContainersFromLine () : entity.AnswerContainer[] {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.LobPolicyLineMethods") as gw.lob.common.LobPolicyLineMethods).CustomAnswerContainersFromLine
  }
  
  property get DisplayReference () : java.lang.String {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.LobCoverable") as gw.lob.common.LobCoverable).DisplayReference
  }
  
  property get SublineTypeName () : java.lang.String {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.gl7.GL7Coverable") as gw.lob.gl7.GL7Coverable).SublineTypeName
  }
  
  
}