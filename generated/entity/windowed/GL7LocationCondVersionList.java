package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationCond.eti;GL7LocationCond.eix;GL7LocationCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocationCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LocationCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocationCondCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7LocationCondCost bean);
  
  
  java.util.List<? extends entity.GL7LocationCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocationCondCostVersionList> getCosts();
  
  
  
}