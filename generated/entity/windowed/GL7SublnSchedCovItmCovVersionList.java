package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCovItmCov.eti;GL7SublnSchedCovItmCov.eix;GL7SublnSchedCovItmCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnSchedCovItmCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnSchedCovItmCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCovItemCovCost> SublnSchedCovItemCovCostsAsOf(java.util.Date date);
  
  
  void addToSublnSchedCovItemCovCosts(entity.GL7SublnSchedCovItemCovCost bean);
  
  
  java.util.List<? extends entity.GL7SublnSchedCovItmCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCovItemCovCostVersionList> getSublnSchedCovItemCovCosts();
  
  
  
}