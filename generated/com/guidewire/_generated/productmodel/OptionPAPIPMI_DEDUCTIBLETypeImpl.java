package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_MI.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIPMI_DEDUCTIBLETypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIPMI_DEDUCTIBLEType> implements productmodel.OptionPAPIPMI_DEDUCTIBLEType {
  public OptionPAPIPMI_DEDUCTIBLETypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_MI getCoverage() {
    return (productmodel.PAPIP_MI)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_MI getPAPIP_MI() {
    return (productmodel.PAPIP_MI)getClause();
  }
  
  
}