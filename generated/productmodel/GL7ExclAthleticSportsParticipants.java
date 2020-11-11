package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclAthleticSportsParticipants.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclAthleticSportsParticipants extends entity.GL7SublineTypeSchedExcl {
  protected GL7ExclAthleticSportsParticipants()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclAthleticSportsParticipants(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclAthleticSportsParticipants");
  }
  
  public GL7ExclAthleticSportsParticipants(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclAthleticSportsParticipants");
  }
  
  public productmodel.DirectGL7ManualPremium51Type getGL7ManualPremium51Term() {
    return (productmodel.DirectGL7ManualPremium51Type)getCovTerm("GL7ManualPremium51");
  }
  
  public boolean getHasGL7ManualPremium51Term() {
    return hasCovTerm("GL7ManualPremium51");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclAthleticSportsParticipantsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclAthleticSportsParticipants>() {
      public productmodel.GL7ExclAthleticSportsParticipants newEmptyInstance() {
        return new productmodel.GL7ExclAthleticSportsParticipants();
      }
      
      
    });
  }
}