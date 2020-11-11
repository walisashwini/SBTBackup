package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CannabisExcl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectGL7ManualPremium285TypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectGL7ManualPremium285Type {
  public DirectGL7ManualPremium285TypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7CannabisExcl getExclusion() {
    return (productmodel.GL7CannabisExcl)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7CannabisExcl getGL7CannabisExcl() {
    return (productmodel.GL7CannabisExcl)getClause();
  }
  
  
}