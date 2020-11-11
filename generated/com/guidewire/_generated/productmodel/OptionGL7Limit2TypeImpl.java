package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7MedPay.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionGL7Limit2TypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionGL7Limit2Type> implements productmodel.OptionGL7Limit2Type {
  public OptionGL7Limit2TypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7MedPay getCoverage() {
    return (productmodel.GL7MedPay)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7MedPay getGL7MedPay() {
    return (productmodel.GL7MedPay)getClause();
  }
  
  
}