package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DamageToPremisesRentedToYou.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionGL7LimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionGL7LimitType> implements productmodel.OptionGL7LimitType {
  public OptionGL7LimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7DamageToPremisesRentedToYou getCoverage() {
    return (productmodel.GL7DamageToPremisesRentedToYou)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7DamageToPremisesRentedToYou getGL7DamageToPremisesRentedToYou() {
    return (productmodel.GL7DamageToPremisesRentedToYou)getClause();
  }
  
  
}