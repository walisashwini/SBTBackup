package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LimitationOfCovForTerrSubLimitAnnualAggBasis.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionGL7AggLimit3TypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionGL7AggLimit3Type> implements productmodel.OptionGL7AggLimit3Type {
  public OptionGL7AggLimit3TypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7LimitationOfCovForTerrSubLimitAnnualAggBasis getCondition() {
    return (productmodel.GL7LimitationOfCovForTerrSubLimitAnnualAggBasis)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7LimitationOfCovForTerrSubLimitAnnualAggBasis getGL7LimitationOfCovForTerrSubLimitAnnualAggBasis() {
    return (productmodel.GL7LimitationOfCovForTerrSubLimitAnnualAggBasis)getClause();
  }
  
  
}