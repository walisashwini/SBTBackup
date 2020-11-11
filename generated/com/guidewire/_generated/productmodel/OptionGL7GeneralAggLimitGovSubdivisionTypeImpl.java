package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtsState.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionGL7GeneralAggLimitGovSubdivisionTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionGL7GeneralAggLimitGovSubdivisionType> implements productmodel.OptionGL7GeneralAggLimitGovSubdivisionType {
  public OptionGL7GeneralAggLimitGovSubdivisionTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7LmtsState getCoverage() {
    return (productmodel.GL7LmtsState)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7LmtsState getGL7LmtsState() {
    return (productmodel.GL7LmtsState)getClause();
  }
  
  
}