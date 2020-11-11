package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclAllHazardsInConnectionWithDesignatedPrem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericGL7Description7TypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericGL7Description7Type {
  public GenericGL7Description7TypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7ExclAllHazardsInConnectionWithDesignatedPrem getExclusion() {
    return (productmodel.GL7ExclAllHazardsInConnectionWithDesignatedPrem)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7ExclAllHazardsInConnectionWithDesignatedPrem getGL7ExclAllHazardsInConnectionWithDesignatedPrem() {
    return (productmodel.GL7ExclAllHazardsInConnectionWithDesignatedPrem)getClause();
  }
  
  
}