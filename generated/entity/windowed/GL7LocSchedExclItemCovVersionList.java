package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedExclItemCov.eti;GL7LocSchedExclItemCov.eix;GL7LocSchedExclItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocSchedExclItemCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LocSchedExclItemCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedExclItemCovCost> LocSchedExclItemCovCostsAsOf(java.util.Date date);
  
  
  void addToLocSchedExclItemCovCosts(entity.GL7LocSchedExclItemCovCost bean);
  
  
  java.util.List<? extends entity.GL7LocSchedExclItemCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedExclItemCovCostVersionList> getLocSchedExclItemCovCosts();
  
  
  
}