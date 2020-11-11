package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7StopGapEmployersLiabCovEndorsementPolLvl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionGL7LimitBIByAccidentTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionGL7LimitBIByAccidentType> implements productmodel.OptionGL7LimitBIByAccidentType {
  public OptionGL7LimitBIByAccidentTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7StopGapEmployersLiabCovEndorsementPolLvl getCoverage() {
    return (productmodel.GL7StopGapEmployersLiabCovEndorsementPolLvl)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7StopGapEmployersLiabCovEndorsementPolLvl getGL7StopGapEmployersLiabCovEndorsementPolLvl() {
    return (productmodel.GL7StopGapEmployersLiabCovEndorsementPolLvl)getClause();
  }
  
  
}