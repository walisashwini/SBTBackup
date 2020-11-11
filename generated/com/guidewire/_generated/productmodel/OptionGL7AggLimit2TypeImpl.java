package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionGL7AggLimit2TypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionGL7AggLimit2Type> implements productmodel.OptionGL7AggLimit2Type {
  public OptionGL7AggLimit2TypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct getCondition() {
    return (productmodel.GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct getGL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct() {
    return (productmodel.GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct)getClause();
  }
  
  
}