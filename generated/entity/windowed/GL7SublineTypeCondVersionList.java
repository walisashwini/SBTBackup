package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeCond.eti;GL7SublineTypeCond.eix;GL7SublineTypeCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineTypeCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublineTypeCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineTypeCondCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7SublineTypeCondCost bean);
  
  
  java.util.List<? extends entity.GL7SublineTypeCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineTypeCondCostVersionList> getCosts();
  
  
  
}