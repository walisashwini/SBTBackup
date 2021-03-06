package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmndmtOfLmtsOfIns.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectGL7MedicalExpenseLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectGL7MedicalExpenseLimitType {
  public DirectGL7MedicalExpenseLimitTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7AmndmtOfLmtsOfIns getCondition() {
    return (productmodel.GL7AmndmtOfLmtsOfIns)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7AmndmtOfLmtsOfIns getGL7AmndmtOfLmtsOfIns() {
    return (productmodel.GL7AmndmtOfLmtsOfIns)getClause();
  }
  
  
}