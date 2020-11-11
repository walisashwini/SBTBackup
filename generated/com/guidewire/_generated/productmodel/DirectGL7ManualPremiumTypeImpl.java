package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AbuseMolestationExcl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectGL7ManualPremiumTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectGL7ManualPremiumType {
  public DirectGL7ManualPremiumTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7AbuseMolestationExcl getExclusion() {
    return (productmodel.GL7AbuseMolestationExcl)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7AbuseMolestationExcl getGL7AbuseMolestationExcl() {
    return (productmodel.GL7AbuseMolestationExcl)getClause();
  }
  
  
}