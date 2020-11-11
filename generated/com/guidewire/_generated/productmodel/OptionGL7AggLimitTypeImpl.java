package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionGL7AggLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionGL7AggLimitType> implements productmodel.OptionGL7AggLimitType {
  public OptionGL7AggLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti getCoverage() {
    return (productmodel.GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti getGL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti() {
    return (productmodel.GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti)getClause();
  }
  
  
}