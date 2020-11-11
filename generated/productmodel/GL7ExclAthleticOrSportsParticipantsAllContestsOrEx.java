package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclAthleticOrSportsParticipantsAllContestsOrEx.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclAthleticOrSportsParticipantsAllContestsOrEx extends entity.GL7SublineTypeSchedExcl {
  protected GL7ExclAthleticOrSportsParticipantsAllContestsOrEx()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclAthleticOrSportsParticipantsAllContestsOrEx(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclAthleticOrSportsParticipantsAllContestsOrEx");
  }
  
  public GL7ExclAthleticOrSportsParticipantsAllContestsOrEx(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclAthleticOrSportsParticipantsAllContestsOrEx");
  }
  
  public productmodel.DirectGL7ManualPremium343Type getGL7ManualPremium343Term() {
    return (productmodel.DirectGL7ManualPremium343Type)getCovTerm("GL7ManualPremium343");
  }
  
  public boolean getHasGL7ManualPremium343Term() {
    return hasCovTerm("GL7ManualPremium343");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclAthleticOrSportsParticipantsAllContestsOrExInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclAthleticOrSportsParticipantsAllContestsOrEx>() {
      public productmodel.GL7ExclAthleticOrSportsParticipantsAllContestsOrEx newEmptyInstance() {
        return new productmodel.GL7ExclAthleticOrSportsParticipantsAllContestsOrEx();
      }
      
      
    });
  }
}