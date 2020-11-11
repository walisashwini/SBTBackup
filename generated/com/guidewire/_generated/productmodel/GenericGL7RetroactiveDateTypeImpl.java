package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7EmplBenefitsLiabCovClaimsMade.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericGL7RetroactiveDateTypeImpl extends com.guidewire.pc.api.domain.covterm.DateTimeCovTermInternal implements productmodel.GenericGL7RetroactiveDateType {
  public GenericGL7RetroactiveDateTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7EmplBenefitsLiabCovClaimsMade getCoverage() {
    return (productmodel.GL7EmplBenefitsLiabCovClaimsMade)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7EmplBenefitsLiabCovClaimsMade getGL7EmplBenefitsLiabCovClaimsMade() {
    return (productmodel.GL7EmplBenefitsLiabCovClaimsMade)getClause();
  }
  
  
}