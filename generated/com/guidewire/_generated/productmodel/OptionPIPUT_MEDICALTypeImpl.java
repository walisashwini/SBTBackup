package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_UT.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIPUT_MEDICALTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIPUT_MEDICALType> implements productmodel.OptionPIPUT_MEDICALType {
  public OptionPIPUT_MEDICALTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_UT getCAPIP_UT() {
    return (productmodel.CAPIP_UT)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_UT getCoverage() {
    return (productmodel.CAPIP_UT)getClause();
  }
  
  
}