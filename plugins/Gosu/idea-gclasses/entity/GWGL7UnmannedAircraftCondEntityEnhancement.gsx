package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "GL7UnmannedAircraftCond.eti;GL7UnmannedAircraftCond.eix;GL7UnmannedAircraftCond.etx")
enhancement GWGL7UnmannedAircraftCondEntityEnhancement : entity.GL7UnmannedAircraftCond {
  property get LobCosts () : java.util.List<entity.Cost> {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.LobQuotable") as gw.lob.common.LobQuotable).LobCosts
  }
  
  
}