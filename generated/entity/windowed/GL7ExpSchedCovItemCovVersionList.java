package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCovItemCov.eti;GL7ExpSchedCovItemCov.eix;GL7ExpSchedCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExpSchedCovItemCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7ExpSchedCovItemCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCovItemCovCost> ExpSchedCovItemCovCostsAsOf(java.util.Date date);
  
  
  void addToExpSchedCovItemCovCosts(entity.GL7ExpSchedCovItemCovCost bean);
  
  
  java.util.List<? extends entity.GL7ExpSchedCovItemCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCovItemCovCostVersionList> getExpSchedCovItemCovCosts();
  
  
  
}