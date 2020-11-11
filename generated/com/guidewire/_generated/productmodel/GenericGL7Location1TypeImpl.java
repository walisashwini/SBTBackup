package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DedLiabInsuranceLiquorLiab.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericGL7Location1TypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericGL7Location1Type {
  public GenericGL7Location1TypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7DedLiabInsuranceLiquorLiab getCoverage() {
    return (productmodel.GL7DedLiabInsuranceLiquorLiab)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7DedLiabInsuranceLiquorLiab getGL7DedLiabInsuranceLiquorLiab() {
    return (productmodel.GL7DedLiabInsuranceLiquorLiab)getClause();
  }
  
  
}