package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_HI.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIPHI_DEDUCTIBLETypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIPHI_DEDUCTIBLEType> implements productmodel.OptionPIPHI_DEDUCTIBLEType {
  public OptionPIPHI_DEDUCTIBLETypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_HI getCAPIP_HI() {
    return (productmodel.CAPIP_HI)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_HI getCoverage() {
    return (productmodel.CAPIP_HI)getClause();
  }
  
  
}