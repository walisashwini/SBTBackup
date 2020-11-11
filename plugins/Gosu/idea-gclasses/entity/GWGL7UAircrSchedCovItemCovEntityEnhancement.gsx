package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "GL7UAircrSchedCovItemCov.eti;GL7UAircrSchedCovItemCov.eix;GL7UAircrSchedCovItemCov.etx")
enhancement GWGL7UAircrSchedCovItemCovEntityEnhancement : entity.GL7UAircrSchedCovItemCov {
  property get LobCosts () : java.util.List<entity.Cost> {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.LobQuotable") as gw.lob.common.LobQuotable).LobCosts
  }
  
  
}