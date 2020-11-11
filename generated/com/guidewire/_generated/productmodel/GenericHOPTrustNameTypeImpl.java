package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPTrust.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericHOPTrustNameTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericHOPTrustNameType {
  public GenericHOPTrustNameTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPTrust getCondition() {
    return (productmodel.HOPTrust)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPTrust getHOPTrust() {
    return (productmodel.HOPTrust)getClause();
  }
  
  
}