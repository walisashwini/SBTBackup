package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "GL7UAircrSchedCovItem.eti;GL7UAircrSchedCovItem.eix;GL7UAircrSchedCovItem.etx")
enhancement GWGL7UAircrSchedCovItemEntityEnhancement : entity.GL7UAircrSchedCovItem {
  property get LobCosts () : java.util.List<entity.Cost> {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.LobQuotable") as gw.lob.common.LobQuotable).LobCosts
  }
  
  
}