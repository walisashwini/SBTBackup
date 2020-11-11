package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCondItemCov.eti;GL7UAircrSchedCondItemCov.eix;GL7UAircrSchedCondItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7UAircrSchedCondItemCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7UAircrSchedCondItemCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UAircrSchedCondItemCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7UAircrSchedCondItemCovCost bean);
  
  
  java.util.List<? extends entity.GL7UAircrSchedCondItemCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7UAircrSchedCondItemCovCostVersionList> getCosts();
  
  
  
}