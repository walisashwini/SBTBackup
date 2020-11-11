package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCovItemCov.eti;GL7UAircrSchedCovItemCov.eix;GL7UAircrSchedCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7UAircrSchedCovItemCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7UAircrSchedCovItemCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UAircrSchedCovItemCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7UAircrSchedCovItemCovCost bean);
  
  
  java.util.List<? extends entity.GL7UAircrSchedCovItemCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7UAircrSchedCovItemCovCostVersionList> getCosts();
  
  
  
}