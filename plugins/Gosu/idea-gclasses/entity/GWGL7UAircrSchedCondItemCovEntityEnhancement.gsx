package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "GL7UAircrSchedCondItemCov.eti;GL7UAircrSchedCondItemCov.eix;GL7UAircrSchedCondItemCov.etx")
enhancement GWGL7UAircrSchedCondItemCovEntityEnhancement : entity.GL7UAircrSchedCondItemCov {
  property get LobCosts () : java.util.List<entity.Cost> {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.LobQuotable") as gw.lob.common.LobQuotable).LobCosts
  }
  
  
}