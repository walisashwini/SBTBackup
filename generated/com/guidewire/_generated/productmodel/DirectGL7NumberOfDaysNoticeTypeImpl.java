package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7EarlierNoticeOfCancellationProvidedByUs.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectGL7NumberOfDaysNoticeTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectGL7NumberOfDaysNoticeType {
  public DirectGL7NumberOfDaysNoticeTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7EarlierNoticeOfCancellationProvidedByUs getCondition() {
    return (productmodel.GL7EarlierNoticeOfCancellationProvidedByUs)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7EarlierNoticeOfCancellationProvidedByUs getGL7EarlierNoticeOfCancellationProvidedByUs() {
    return (productmodel.GL7EarlierNoticeOfCancellationProvidedByUs)getClause();
  }
  
  
}