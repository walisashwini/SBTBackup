package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "GL7UAircrSchedCondItem.eti;GL7UAircrSchedCondItem.eix;GL7UAircrSchedCondItem.etx")
enhancement GWGL7UAircrSchedCondItemEntityEnhancement : entity.GL7UAircrSchedCondItem {
  property get LobCosts () : java.util.List<entity.Cost> {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.LobQuotable") as gw.lob.common.LobQuotable).LobCosts
  }
  
  
}