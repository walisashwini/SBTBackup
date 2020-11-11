package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedExclItemCov.eti;GL7UAircrSchedExclItemCov.eix;GL7UAircrSchedExclItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7UAircrSchedExclItemCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7UAircrSchedExclItemCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UAircrSchedExclItemCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7UAircrSchedExclItemCovCost bean);
  
  
  java.util.List<? extends entity.GL7UAircrSchedExclItemCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7UAircrSchedExclItemCovCostVersionList> getCosts();
  
  
  
}