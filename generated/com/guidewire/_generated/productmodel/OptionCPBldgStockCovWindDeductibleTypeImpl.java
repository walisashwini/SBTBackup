package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/coveragepatterns/CPBldgStockCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionCPBldgStockCovWindDeductibleTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionCPBldgStockCovWindDeductibleType> implements productmodel.OptionCPBldgStockCovWindDeductibleType {
  public OptionCPBldgStockCovWindDeductibleTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CPBldgStockCov getCPBldgStockCov() {
    return (productmodel.CPBldgStockCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.CPBldgStockCov getCoverage() {
    return (productmodel.CPBldgStockCov)getClause();
  }
  
  
}