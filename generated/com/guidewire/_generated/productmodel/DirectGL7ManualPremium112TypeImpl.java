package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7FungiOrBacteriaExcl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectGL7ManualPremium112TypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectGL7ManualPremium112Type {
  public DirectGL7ManualPremium112TypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7FungiOrBacteriaExcl getExclusion() {
    return (productmodel.GL7FungiOrBacteriaExcl)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7FungiOrBacteriaExcl getGL7FungiOrBacteriaExcl() {
    return (productmodel.GL7FungiOrBacteriaExcl)getClause();
  }
  
  
}