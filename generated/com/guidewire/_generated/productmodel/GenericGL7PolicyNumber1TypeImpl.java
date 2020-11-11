package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PolicyChanges.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericGL7PolicyNumber1TypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericGL7PolicyNumber1Type {
  public GenericGL7PolicyNumber1TypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7PolicyChanges getCondition() {
    return (productmodel.GL7PolicyChanges)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7PolicyChanges getGL7PolicyChanges() {
    return (productmodel.GL7PolicyChanges)getClause();
  }
  
  
}