package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CompositeRating.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericGL7CompositeRatingExposureBasisOverrideTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericGL7CompositeRatingExposureBasisOverrideType {
  public GenericGL7CompositeRatingExposureBasisOverrideTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7CompositeRating getCoverage() {
    return (productmodel.GL7CompositeRating)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7CompositeRating getGL7CompositeRating() {
    return (productmodel.GL7CompositeRating)getClause();
  }
  
  
}