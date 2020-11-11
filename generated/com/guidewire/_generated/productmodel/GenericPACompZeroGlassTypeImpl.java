package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAComprehensiveCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPACompZeroGlassTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPACompZeroGlassType {
  public GenericPACompZeroGlassTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAComprehensiveCov getCoverage() {
    return (productmodel.PAComprehensiveCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAComprehensiveCov getPAComprehensiveCov() {
    return (productmodel.PAComprehensiveCov)getClause();
  }
  
  
}