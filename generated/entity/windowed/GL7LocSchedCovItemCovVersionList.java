package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCovItemCov.eti;GL7LocSchedCovItemCov.eix;GL7LocSchedCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocSchedCovItemCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LocSchedCovItemCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCovItemCovCost> LocSchedCovItemCovCostsAsOf(java.util.Date date);
  
  
  void addToLocSchedCovItemCovCosts(entity.GL7LocSchedCovItemCovCost bean);
  
  
  java.util.List<? extends entity.GL7LocSchedCovItemCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCovItemCovCostVersionList> getLocSchedCovItemCovCosts();
  
  
  
}