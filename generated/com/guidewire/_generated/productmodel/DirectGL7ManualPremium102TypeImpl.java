package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclProductTampering.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectGL7ManualPremium102TypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectGL7ManualPremium102Type {
  public DirectGL7ManualPremium102TypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7ExclProductTampering getExclusion() {
    return (productmodel.GL7ExclProductTampering)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7ExclProductTampering getGL7ExclProductTampering() {
    return (productmodel.GL7ExclProductTampering)getClause();
  }
  
  
}