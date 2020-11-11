package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CommunicableDiseaseExcl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectGL7ManualPremium30TypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectGL7ManualPremium30Type {
  public DirectGL7ManualPremium30TypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7CommunicableDiseaseExcl getExclusion() {
    return (productmodel.GL7CommunicableDiseaseExcl)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7CommunicableDiseaseExcl getGL7CommunicableDiseaseExcl() {
    return (productmodel.GL7CommunicableDiseaseExcl)getClause();
  }
  
  
}