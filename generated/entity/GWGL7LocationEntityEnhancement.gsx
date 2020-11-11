package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "GL7Location.eti;GL7Location.eix;GL7Location.etx")
enhancement GWGL7LocationEntityEnhancement : entity.GL7Location {
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