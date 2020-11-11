package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PolicyChangesExceptions.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericGL7PaymentPlanTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericGL7PaymentPlanType {
  public GenericGL7PaymentPlanTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7PolicyChangesExceptions getCondition() {
    return (productmodel.GL7PolicyChangesExceptions)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7PolicyChangesExceptions getGL7PolicyChangesExceptions() {
    return (productmodel.GL7PolicyChangesExceptions)getClause();
  }
  
  
}