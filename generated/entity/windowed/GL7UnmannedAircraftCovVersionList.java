package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UnmannedAircraftCov.eti;GL7UnmannedAircraftCov.eix;GL7UnmannedAircraftCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7UnmannedAircraftCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7UnmannedAircraftCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UnmannedAircraftCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7UnmannedAircraftCovCost bean);
  
  
  java.util.List<? extends entity.GL7UnmannedAircraftCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7UnmannedAircraftCovCostVersionList> getCosts();
  
  
  
}