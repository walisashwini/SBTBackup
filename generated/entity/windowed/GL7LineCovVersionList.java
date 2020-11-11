package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineCov.eti;GL7LineCov.eix;GL7LineCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LineCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LineCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7LineCovCost bean);
  
  
  java.util.List<? extends entity.GL7LineCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LineCovCostVersionList> getCosts();
  
  
  
}