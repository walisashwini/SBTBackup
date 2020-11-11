package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs extends entity.GL7SublineTypeSchedCond {
  protected GL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs");
  }
  
  public GL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmndmtOfSectVExtddRptgPeriodsSpecificAccsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs>() {
      public productmodel.GL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs newEmptyInstance() {
        return new productmodel.GL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs();
      }
      
      
    });
  }
}