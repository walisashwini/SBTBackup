package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "GL7UnmannedAircraftExcl.eti;GL7UnmannedAircraftExcl.eix;GL7UnmannedAircraftExcl.etx")
enhancement GWGL7UnmannedAircraftExclEntityEnhancement : entity.GL7UnmannedAircraftExcl {
  property get LobCosts () : java.util.List<entity.Cost> {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.LobQuotable") as gw.lob.common.LobQuotable).LobCosts
  }
  
  
}