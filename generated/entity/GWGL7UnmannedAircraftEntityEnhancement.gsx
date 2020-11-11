package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "GL7UnmannedAircraft.eti;GL7UnmannedAircraft.eix;GL7UnmannedAircraft.etx")
enhancement GWGL7UnmannedAircraftEntityEnhancement : entity.GL7UnmannedAircraft {
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