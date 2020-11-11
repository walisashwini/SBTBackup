package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnHo.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnHo extends entity.GL7SublineTypeExcl {
  protected GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnHo()  {
    super((java.lang.Void)null);
  }
  
  public GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnHo(entity.PolicyPeriod branch)  {
    super(branch, "GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnHo");
  }
  
  public GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnHo(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnHo");
  }
  
  public productmodel.DirectGL7ManualPremium163Type getGL7ManualPremium163Term() {
    return (productmodel.DirectGL7ManualPremium163Type)getCovTerm("GL7ManualPremium163");
  }
  
  public boolean getHasGL7ManualPremium163Term() {
    return hasCovTerm("GL7ManualPremium163");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnHoInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnHo>() {
      public productmodel.GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnHo newEmptyInstance() {
        return new productmodel.GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnHo();
      }
      
      
    });
  }
}