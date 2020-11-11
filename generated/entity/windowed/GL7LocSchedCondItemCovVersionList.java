package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCondItemCov.eti;GL7LocSchedCondItemCov.eix;GL7LocSchedCondItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocSchedCondItemCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LocSchedCondItemCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCondItemCovCost> LocSchedCondItemCovCostsAsOf(java.util.Date date);
  
  
  void addToLocSchedCondItemCovCosts(entity.GL7LocSchedCondItemCovCost bean);
  
  
  java.util.List<? extends entity.GL7LocSchedCondItemCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCondItemCovCostVersionList> getLocSchedCondItemCovCosts();
  
  
  
}