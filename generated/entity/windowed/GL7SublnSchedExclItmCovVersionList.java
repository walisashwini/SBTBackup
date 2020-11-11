package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedExclItmCov.eti;GL7SublnSchedExclItmCov.eix;GL7SublnSchedExclItmCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnSchedExclItmCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnSchedExclItmCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedExclItemCovCost> SublnSchedExclItemCovCostsAsOf(java.util.Date date);
  
  
  void addToSublnSchedExclItemCovCosts(entity.GL7SublnSchedExclItemCovCost bean);
  
  
  java.util.List<? extends entity.GL7SublnSchedExclItmCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedExclItemCovCostVersionList> getSublnSchedExclItemCovCosts();
  
  
  
}