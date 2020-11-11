package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationCov.eti;GL7LocationCov.eix;GL7LocationCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocationCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LocationCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocationCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7LocationCovCost bean);
  
  
  java.util.List<? extends entity.GL7LocationCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocationCovCostVersionList> getCosts();
  
  
  
}