package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ElectrDataLiabCovForm.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectGL7ManualPremium45TypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectGL7ManualPremium45Type {
  public DirectGL7ManualPremium45TypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7ElectrDataLiabCovForm getCoverage() {
    return (productmodel.GL7ElectrDataLiabCovForm)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7ElectrDataLiabCovForm getGL7ElectrDataLiabCovForm() {
    return (productmodel.GL7ElectrDataLiabCovForm)getClause();
  }
  
  
}