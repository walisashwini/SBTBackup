package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7EarlierNoticeOfCancellationProvidedByUs.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7EarlierNoticeOfCancellationProvidedByUs extends entity.GL7SublineTypeCond {
  protected GL7EarlierNoticeOfCancellationProvidedByUs()  {
    super((java.lang.Void)null);
  }
  
  public GL7EarlierNoticeOfCancellationProvidedByUs(entity.PolicyPeriod branch)  {
    super(branch, "GL7EarlierNoticeOfCancellationProvidedByUs");
  }
  
  public GL7EarlierNoticeOfCancellationProvidedByUs(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7EarlierNoticeOfCancellationProvidedByUs");
  }
  
  public productmodel.DirectGL7ManualPremium42Type getGL7ManualPremium42Term() {
    return (productmodel.DirectGL7ManualPremium42Type)getCovTerm("GL7ManualPremium42");
  }
  
  public productmodel.DirectGL7NumberOfDaysNoticeType getGL7NumberOfDaysNoticeTerm() {
    return (productmodel.DirectGL7NumberOfDaysNoticeType)getCovTerm("GL7NumberOfDaysNotice");
  }
  
  public boolean getHasGL7ManualPremium42Term() {
    return hasCovTerm("GL7ManualPremium42");
  }
  
  public boolean getHasGL7NumberOfDaysNoticeTerm() {
    return hasCovTerm("GL7NumberOfDaysNotice");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7EarlierNoticeOfCancellationProvidedByUsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7EarlierNoticeOfCancellationProvidedByUs>() {
      public productmodel.GL7EarlierNoticeOfCancellationProvidedByUs newEmptyInstance() {
        return new productmodel.GL7EarlierNoticeOfCancellationProvidedByUs();
      }
      
      
    });
  }
}