package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPOrdinanceCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPOrdLawCov3LimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPOrdLawCov3LimType {
  public DirectBOPOrdLawCov3LimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPOrdinanceCov getBOPOrdinanceCov() {
    return (productmodel.BOPOrdinanceCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPOrdinanceCov getCoverage() {
    return (productmodel.BOPOrdinanceCov)getClause();
  }
  
  
}