package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_NY.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIPNY_DEATHTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIPNY_DEATHType> implements productmodel.OptionPIPNY_DEATHType {
  public OptionPIPNY_DEATHTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_NY getCAPIP_NY() {
    return (productmodel.CAPIP_NY)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_NY getCoverage() {
    return (productmodel.CAPIP_NY)getClause();
  }
  
  
}