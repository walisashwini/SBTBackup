package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CannabisExclProductWithdrawal.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectGL7ManualPremium292TypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectGL7ManualPremium292Type {
  public DirectGL7ManualPremium292TypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7CannabisExclProductWithdrawal getExclusion() {
    return (productmodel.GL7CannabisExclProductWithdrawal)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7CannabisExclProductWithdrawal getGL7CannabisExclProductWithdrawal() {
    return (productmodel.GL7CannabisExclProductWithdrawal)getClause();
  }
  
  
}