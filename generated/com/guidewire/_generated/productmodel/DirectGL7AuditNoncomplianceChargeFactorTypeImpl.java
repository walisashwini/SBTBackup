package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PremiumAuditNoncomplianceCharge.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectGL7AuditNoncomplianceChargeFactorTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectGL7AuditNoncomplianceChargeFactorType {
  public DirectGL7AuditNoncomplianceChargeFactorTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7PremiumAuditNoncomplianceCharge getCondition() {
    return (productmodel.GL7PremiumAuditNoncomplianceCharge)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7PremiumAuditNoncomplianceCharge getGL7PremiumAuditNoncomplianceCharge() {
    return (productmodel.GL7PremiumAuditNoncomplianceCharge)getClause();
  }
  
  
}