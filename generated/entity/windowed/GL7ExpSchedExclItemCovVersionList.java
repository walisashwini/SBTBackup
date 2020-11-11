package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedExclItemCov.eti;GL7ExpSchedExclItemCov.eix;GL7ExpSchedExclItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExpSchedExclItemCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7ExpSchedExclItemCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedExclItemCovCost> ExpSchedExclItemCovCostsAsOf(java.util.Date date);
  
  
  void addToExpSchedExclItemCovCosts(entity.GL7ExpSchedExclItemCovCost bean);
  
  
  java.util.List<? extends entity.GL7ExpSchedExclItemCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedExclItemCovCostVersionList> getExpSchedExclItemCovCosts();
  
  
  
}