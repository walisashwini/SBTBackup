package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7EarlierNoticeOfCancellationProvidedByUsOwnersCo.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7EarlierNoticeOfCancellationProvidedByUsOwnersCo extends entity.GL7SublineTypeCov {
  protected GL7EarlierNoticeOfCancellationProvidedByUsOwnersCo()  {
    super((java.lang.Void)null);
  }
  
  public GL7EarlierNoticeOfCancellationProvidedByUsOwnersCo(entity.PolicyPeriod branch)  {
    super(branch, "GL7EarlierNoticeOfCancellationProvidedByUsOwnersCo");
  }
  
  public GL7EarlierNoticeOfCancellationProvidedByUsOwnersCo(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7EarlierNoticeOfCancellationProvidedByUsOwnersCo");
  }
  
  public productmodel.DirectGL7ManualPremium43Type getGL7ManualPremium43Term() {
    return (productmodel.DirectGL7ManualPremium43Type)getCovTerm("GL7ManualPremium43");
  }
  
  public productmodel.DirectGL7NumberOfDaysNotice1Type getGL7NumberOfDaysNotice1Term() {
    return (productmodel.DirectGL7NumberOfDaysNotice1Type)getCovTerm("GL7NumberOfDaysNotice1");
  }
  
  public boolean getHasGL7ManualPremium43Term() {
    return hasCovTerm("GL7ManualPremium43");
  }
  
  public boolean getHasGL7NumberOfDaysNotice1Term() {
    return hasCovTerm("GL7NumberOfDaysNotice1");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7EarlierNoticeOfCancellationProvidedByUsOwnersCoInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7EarlierNoticeOfCancellationProvidedByUsOwnersCo>() {
      public productmodel.GL7EarlierNoticeOfCancellationProvidedByUsOwnersCo newEmptyInstance() {
        return new productmodel.GL7EarlierNoticeOfCancellationProvidedByUsOwnersCo();
      }
      
      
    });
  }
}