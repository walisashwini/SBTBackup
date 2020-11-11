package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "GL7UnmannedAircraftCov.eti;GL7UnmannedAircraftCov.eix;GL7UnmannedAircraftCov.etx")
enhancement GWGL7UnmannedAircraftCovEntityEnhancement : entity.GL7UnmannedAircraftCov {
  property get LobCosts () : java.util.List<entity.Cost> {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.LobQuotable") as gw.lob.common.LobQuotable).LobCosts
  }
  
  
}