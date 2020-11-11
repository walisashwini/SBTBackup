package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "GL7SublineType.eti;GL7SublineType.eix;GL7SublineType.etx")
enhancement GWGL7SublineTypeEntityEnhancement : entity.GL7SublineType {
  function isClauseMultistateAvailable (clauseCode :  java.lang.String) : java.lang.Boolean {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.MultistateAvailabilityCoverable") as gw.lob.common.MultistateAvailabilityCoverable).isClauseMultistateAvailable(clauseCode)
  }
  
  function isCovTermMultistateAvailable (clauseCode :  java.lang.String, covTermCode :  java.lang.String) : java.lang.Boolean {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.MultistateAvailabilityCoverable") as gw.lob.common.MultistateAvailabilityCoverable).isCovTermMultistateAvailable(clauseCode, covTermCode)
  }
  
  property get Constraint () : gw.lob.common.dependency.GraphTraversalConstraint {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.LobCoverable") as gw.lob.common.LobCoverable).Constraint
  }
  
  property get DisplayReference () : java.lang.String {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.LobCoverable") as gw.lob.common.LobCoverable).DisplayReference
  }
  
  property get SublineTypeName () : java.lang.String {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.gl7.GL7Coverable") as gw.lob.gl7.GL7Coverable).SublineTypeName
  }
  
  
}