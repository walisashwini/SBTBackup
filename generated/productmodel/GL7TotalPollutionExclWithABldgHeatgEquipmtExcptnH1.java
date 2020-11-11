package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnH1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnH1 extends entity.GL7SublineTypeExcl {
  protected GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnH1()  {
    super((java.lang.Void)null);
  }
  
  public GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnH1(entity.PolicyPeriod branch)  {
    super(branch, "GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnH1");
  }
  
  public GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnH1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnH1");
  }
  
  public productmodel.DirectGL7ManualPremium394Type getGL7ManualPremium394Term() {
    return (productmodel.DirectGL7ManualPremium394Type)getCovTerm("GL7ManualPremium394");
  }
  
  public boolean getHasGL7ManualPremium394Term() {
    return hasCovTerm("GL7ManualPremium394");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnH1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnH1>() {
      public productmodel.GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnH1 newEmptyInstance() {
        return new productmodel.GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnH1();
      }
      
      
    });
  }
}