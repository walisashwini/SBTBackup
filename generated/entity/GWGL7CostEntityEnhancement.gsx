package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "GL7Cost.eti;GL7Cost.eix;GL7Cost.etx")
enhancement GWGL7CostEntityEnhancement : entity.GL7Cost {
  property get Clause () : entity.Clause {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.financials.LobCostMethods") as gw.lob.common.financials.LobCostMethods).Clause
  }
  
  property get Condition () : entity.PolicyCondition {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.financials.LobCostMethods") as gw.lob.common.financials.LobCostMethods).Condition
  }
  
  property get Coverage () : entity.Coverage {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.financials.LobCostMethods") as gw.lob.common.financials.LobCostMethods).Coverage
  }
  
  property get CoverageCategory () : java.lang.String {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.financials.LobCostMethods") as gw.lob.common.financials.LobCostMethods).CoverageCategory
  }
  
  property get Description () : java.lang.String {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.financials.LobCostMethods") as gw.lob.common.financials.LobCostMethods).Description
  }
  
  property get Exclusion () : entity.Exclusion {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.financials.LobCostMethods") as gw.lob.common.financials.LobCostMethods).Exclusion
  }
  
  property get Jurisdiction () : typekey.Jurisdiction {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.financials.LobCostMethods") as gw.lob.common.financials.LobCostMethods).Jurisdiction
  }
  
  property get OwningCoverable () : entity.Coverable {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.financials.LobCostMethods") as gw.lob.common.financials.LobCostMethods).OwningCoverable
  }
  
  property get Priority () : java.lang.Integer {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.financials.LobCostMethods") as gw.lob.common.financials.LobCostMethods).Priority
  }
  
  
}