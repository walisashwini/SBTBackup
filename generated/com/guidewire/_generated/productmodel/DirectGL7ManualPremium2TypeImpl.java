package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclMedPayCovInmatesPatientsPrisoners.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectGL7ManualPremium2TypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectGL7ManualPremium2Type {
  public DirectGL7ManualPremium2TypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7ExclMedPayCovInmatesPatientsPrisoners getExclusion() {
    return (productmodel.GL7ExclMedPayCovInmatesPatientsPrisoners)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7ExclMedPayCovInmatesPatientsPrisoners getGL7ExclMedPayCovInmatesPatientsPrisoners() {
    return (productmodel.GL7ExclMedPayCovInmatesPatientsPrisoners)getClause();
  }
  
  
}