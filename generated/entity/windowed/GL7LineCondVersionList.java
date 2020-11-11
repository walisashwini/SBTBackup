package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineCond.eti;GL7LineCond.eix;GL7LineCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LineCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LineCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineCondCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7LineCondCost bean);
  
  
  java.util.List<? extends entity.GL7LineCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LineCondCostVersionList> getCosts();
  
  
  
}