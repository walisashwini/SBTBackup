package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_NJ.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPIPNJ_MED_COPAYTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPIPNJ_MED_COPAYType {
  public GenericPIPNJ_MED_COPAYTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_NJ getCAPIP_NJ() {
    return (productmodel.CAPIP_NJ)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_NJ getCoverage() {
    return (productmodel.CAPIP_NJ)getClause();
  }
  
  
}