package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DedLiabInsurance.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericGL7LocationTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericGL7LocationType {
  public GenericGL7LocationTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
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