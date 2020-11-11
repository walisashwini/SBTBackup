package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PolicyChanges.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PolicyChanges extends entity.GL7SublineTypeCond {
  protected GL7PolicyChanges()  {
    super((java.lang.Void)null);
  }
  
  public GL7PolicyChanges(entity.PolicyPeriod branch)  {
    super(branch, "GL7PolicyChanges");
  }
  
  public GL7PolicyChanges(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PolicyChanges");
  }
  
  public productmodel.GenericGL7AuthorizedRepresentType getGL7AuthorizedRepresentTerm() {
    return (productmodel.GenericGL7AuthorizedRepresentType)getCovTerm("GL7AuthorizedRepresent");
  }
  
  public productmodel.GenericGL7AuthorizedRepresentativeSignatureType getGL7AuthorizedRepresentativeSignatureTerm() {
    return (productmodel.GenericGL7AuthorizedRepresentativeSignatureType)getCovTerm("GL7AuthorizedRepresentativeSignature");
  }
  
  public productmodel.GenericGL7ChangesType getGL7ChangesTerm() {
    return (productmodel.GenericGL7ChangesType)getCovTerm("GL7Changes");
  }
  
  public productmodel.GenericGL7CompanyNameType getGL7CompanyNameTerm() {
    return (productmodel.GenericGL7CompanyNameType)getCovTerm("GL7CompanyName");
  }
  
  public productmodel.GenericGL7CovPartsAffectedType getGL7CovPartsAffectedTerm() {
    return (productmodel.GenericGL7CovPartsAffectedType)getCovTerm("GL7CovPartsAffected");
  }
  
  public productmodel.GenericGL7NamedInsuredType getGL7NamedInsuredTerm() {
    return (productmodel.GenericGL7NamedInsuredType)getCovTerm("GL7NamedInsured");
  }
  
  public productmodel.GenericGL7PolicyChangeEffectiveDateType getGL7PolicyChangeEffectiveDateTerm() {
    return (productmodel.GenericGL7PolicyChangeEffectiveDateType)getCovTerm("GL7PolicyChangeEffectiveDate");
  }
  
  public productmodel.GenericGL7PolicyNumber1Type getGL7PolicyNumber1Term() {
    return (productmodel.GenericGL7PolicyNumber1Type)getCovTerm("GL7PolicyNumber1");
  }
  
  public boolean getHasGL7AuthorizedRepresentTerm() {
    return hasCovTerm("GL7AuthorizedRepresent");
  }
  
  public boolean getHasGL7AuthorizedRepresentativeSignatureTerm() {
    return hasCovTerm("GL7AuthorizedRepresentativeSignature");
  }
  
  public boolean getHasGL7ChangesTerm() {
    return hasCovTerm("GL7Changes");
  }
  
  public boolean getHasGL7CompanyNameTerm() {
    return hasCovTerm("GL7CompanyName");
  }
  
  public boolean getHasGL7CovPartsAffectedTerm() {
    return hasCovTerm("GL7CovPartsAffected");
  }
  
  public boolean getHasGL7NamedInsuredTerm() {
    return hasCovTerm("GL7NamedInsured");
  }
  
  public boolean getHasGL7PolicyChangeEffectiveDateTerm() {
    return hasCovTerm("GL7PolicyChangeEffectiveDate");
  }
  
  public boolean getHasGL7PolicyNumber1Term() {
    return hasCovTerm("GL7PolicyNumber1");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PolicyChangesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PolicyChanges>() {
      public productmodel.GL7PolicyChanges newEmptyInstance() {
        return new productmodel.GL7PolicyChanges();
      }
      
      
    });
  }
}