package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "GL7UAircrSchedExclItem.eti;GL7UAircrSchedExclItem.eix;GL7UAircrSchedExclItem.etx")
enhancement GWGL7UAircrSchedExclItemEntityEnhancement : entity.GL7UAircrSchedExclItem {
  property get LobCosts () : java.util.List<entity.Cost> {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.LobQuotable") as gw.lob.common.LobQuotable).LobCosts
  }
  
  
}