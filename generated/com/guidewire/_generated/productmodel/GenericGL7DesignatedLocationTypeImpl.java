package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DesignatedLocLiquorAggLimit.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericGL7DesignatedLocationTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericGL7DesignatedLocationType {
  public GenericGL7DesignatedLocationTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7DesignatedLocLiquorAggLimit getCoverage() {
    return (productmodel.GL7DesignatedLocLiquorAggLimit)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7DesignatedLocLiquorAggLimit getGL7DesignatedLocLiquorAggLimit() {
    return (productmodel.GL7DesignatedLocLiquorAggLimit)getClause();
  }
  
  
}