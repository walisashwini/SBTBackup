package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7INChangesPerPersonLmtsOfInsGovSubdivisions.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7INChangesPerPersonLmtsOfInsGovSubdivisions extends entity.GL7SublineCov {
  protected GL7INChangesPerPersonLmtsOfInsGovSubdivisions()  {
    super((java.lang.Void)null);
  }
  
  public GL7INChangesPerPersonLmtsOfInsGovSubdivisions(entity.PolicyPeriod branch)  {
    super(branch, "GL7INChangesPerPersonLmtsOfInsGovSubdivisions");
  }
  
  public GL7INChangesPerPersonLmtsOfInsGovSubdivisions(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7INChangesPerPersonLmtsOfInsGovSubdivisions");
  }
  
  public productmodel.DirectGL7LimitOfInsPerPersonType getGL7LimitOfInsPerPersonTerm() {
    return (productmodel.DirectGL7LimitOfInsPerPersonType)getCovTerm("GL7LimitOfInsPerPerson");
  }
  
  public boolean getHasGL7LimitOfInsPerPersonTerm() {
    return hasCovTerm("GL7LimitOfInsPerPerson");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7INChangesPerPersonLmtsOfInsGovSubdivisionsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7INChangesPerPersonLmtsOfInsGovSubdivisions>() {
      public productmodel.GL7INChangesPerPersonLmtsOfInsGovSubdivisions newEmptyInstance() {
        return new productmodel.GL7INChangesPerPersonLmtsOfInsGovSubdivisions();
      }
      
      
    });
  }
}