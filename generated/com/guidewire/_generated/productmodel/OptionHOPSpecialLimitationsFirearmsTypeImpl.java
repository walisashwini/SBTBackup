package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPSpecialLimitations.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPSpecialLimitationsFirearmsTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPSpecialLimitationsFirearmsType> implements productmodel.OptionHOPSpecialLimitationsFirearmsType {
  public OptionHOPSpecialLimitationsFirearmsTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPSpecialLimitations getCondition() {
    return (productmodel.HOPSpecialLimitations)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPSpecialLimitations getHOPSpecialLimitations() {
    return (productmodel.HOPSpecialLimitations)getClause();
  }
  
  
}