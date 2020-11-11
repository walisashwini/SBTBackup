package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "GL7UAircrSchedExclItemCov.eti;GL7UAircrSchedExclItemCov.eix;GL7UAircrSchedExclItemCov.etx")
enhancement GWGL7UAircrSchedExclItemCovEntityEnhancement : entity.GL7UAircrSchedExclItemCov {
  property get LobCosts () : java.util.List<entity.Cost> {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.LobQuotable") as gw.lob.common.LobQuotable).LobCosts
  }
  
  
}