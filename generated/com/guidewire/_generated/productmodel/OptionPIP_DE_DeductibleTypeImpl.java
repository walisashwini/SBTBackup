package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_DE.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIP_DE_DeductibleTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIP_DE_DeductibleType> implements productmodel.OptionPIP_DE_DeductibleType {
  public OptionPIP_DE_DeductibleTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_DE getCAPIP_DE() {
    return (productmodel.CAPIP_DE)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_DE getCoverage() {
    return (productmodel.CAPIP_DE)getClause();
  }
  
  
}