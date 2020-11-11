package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DedLiabInsurance.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectGL7LimitationTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectGL7LimitationType {
  public DirectGL7LimitationTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7DedLiabInsurance getCoverage() {
    return (productmodel.GL7DedLiabInsurance)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7DedLiabInsurance getGL7DedLiabInsurance() {
    return (productmodel.GL7DedLiabInsurance)getClause();
  }
  
  
}