package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UnmannedAircraftCond.eti;GL7UnmannedAircraftCond.eix;GL7UnmannedAircraftCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7UnmannedAircraftCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7UnmannedAircraftCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UnmannedAircraftCondCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7UnmannedAircraftCondCost bean);
  
  
  java.util.List<? extends entity.GL7UnmannedAircraftCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7UnmannedAircraftCondCostVersionList> getCosts();
  
  
  
}