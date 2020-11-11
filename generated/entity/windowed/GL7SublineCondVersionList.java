package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineCond.eti;GL7SublineCond.eix;GL7SublineCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublineCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineCondCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7SublineCondCost bean);
  
  
  java.util.List<? extends entity.GL7SublineCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineCondCostVersionList> getCosts();
  
  
  
}