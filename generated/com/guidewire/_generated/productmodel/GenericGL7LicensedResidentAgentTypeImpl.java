package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ResidentAgentCountersignatureEndorsement.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericGL7LicensedResidentAgentTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericGL7LicensedResidentAgentType {
  public GenericGL7LicensedResidentAgentTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7ResidentAgentCountersignatureEndorsement getCondition() {
    return (productmodel.GL7ResidentAgentCountersignatureEndorsement)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7ResidentAgentCountersignatureEndorsement getGL7ResidentAgentCountersignatureEndorsement() {
    return (productmodel.GL7ResidentAgentCountersignatureEndorsement)getClause();
  }
  
  
}