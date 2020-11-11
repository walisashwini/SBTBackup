package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7WoodDestroyingInsectDiagnosticInspectionErrorsA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7WoodDestroyingInsectDiagnosticInspectionErrorsA extends entity.GL7SublineCov {
  protected GL7WoodDestroyingInsectDiagnosticInspectionErrorsA()  {
    super((java.lang.Void)null);
  }
  
  public GL7WoodDestroyingInsectDiagnosticInspectionErrorsA(entity.PolicyPeriod branch)  {
    super(branch, "GL7WoodDestroyingInsectDiagnosticInspectionErrorsA");
  }
  
  public GL7WoodDestroyingInsectDiagnosticInspectionErrorsA(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7WoodDestroyingInsectDiagnosticInspectionErrorsA");
  }
  
  public productmodel.DirectGL7AggLimit21Type getGL7AggLimit21Term() {
    return (productmodel.DirectGL7AggLimit21Type)getCovTerm("GL7AggLimit21");
  }
  
  public productmodel.DirectGL7EachOccurrenceLimit4Type getGL7EachOccurrenceLimit4Term() {
    return (productmodel.DirectGL7EachOccurrenceLimit4Type)getCovTerm("GL7EachOccurrenceLimit4");
  }
  
  public productmodel.DirectGL7ManualPremium238Type getGL7ManualPremium238Term() {
    return (productmodel.DirectGL7ManualPremium238Type)getCovTerm("GL7ManualPremium238");
  }
  
  public boolean getHasGL7AggLimit21Term() {
    return hasCovTerm("GL7AggLimit21");
  }
  
  public boolean getHasGL7EachOccurrenceLimit4Term() {
    return hasCovTerm("GL7EachOccurrenceLimit4");
  }
  
  public boolean getHasGL7ManualPremium238Term() {
    return hasCovTerm("GL7ManualPremium238");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7WoodDestroyingInsectDiagnosticInspectionErrorsAInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7WoodDestroyingInsectDiagnosticInspectionErrorsA>() {
      public productmodel.GL7WoodDestroyingInsectDiagnosticInspectionErrorsA newEmptyInstance() {
        return new productmodel.GL7WoodDestroyingInsectDiagnosticInspectionErrorsA();
      }
      
      
    });
  }
}