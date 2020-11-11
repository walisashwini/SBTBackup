package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclUnmannedAircraftCovBOnly.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectGL7ManualPremium105TypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectGL7ManualPremium105Type {
  public DirectGL7ManualPremium105TypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7ExclUnmannedAircraftCovBOnly getExclusion() {
    return (productmodel.GL7ExclUnmannedAircraftCovBOnly)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7ExclUnmannedAircraftCovBOnly getGL7ExclUnmannedAircraftCovBOnly() {
    return (productmodel.GL7ExclUnmannedAircraftCovBOnly)getClause();
  }
  
  
}