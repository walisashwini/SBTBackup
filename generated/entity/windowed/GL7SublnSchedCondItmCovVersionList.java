package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCondItmCov.eti;GL7SublnSchedCondItmCov.eix;GL7SublnSchedCondItmCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnSchedCondItmCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnSchedCondItmCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCondItemCovCost> SublnSchedCondItemCovCostsAsOf(java.util.Date date);
  
  
  void addToSublnSchedCondItemCovCosts(entity.GL7SublnSchedCondItemCovCost bean);
  
  
  java.util.List<? extends entity.GL7SublnSchedCondItmCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCondItemCovCostVersionList> getSublnSchedCondItemCovCosts();
  
  
  
}