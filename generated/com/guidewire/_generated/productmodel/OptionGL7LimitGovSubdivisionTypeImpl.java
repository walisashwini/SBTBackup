package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DamageToPremisesRentedToYouGovSubdivision.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionGL7LimitGovSubdivisionTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionGL7LimitGovSubdivisionType> implements productmodel.OptionGL7LimitGovSubdivisionType {
  public OptionGL7LimitGovSubdivisionTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7DamageToPremisesRentedToYouGovSubdivision getCoverage() {
    return (productmodel.GL7DamageToPremisesRentedToYouGovSubdivision)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7DamageToPremisesRentedToYouGovSubdivision getGL7DamageToPremisesRentedToYouGovSubdivision() {
    return (productmodel.GL7DamageToPremisesRentedToYouGovSubdivision)getClause();
  }
  
  
}