package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureCov.eti;GL7ExposureCov.eix;GL7ExposureCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExposureCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7ExposureCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExposureCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7ExposureCovCost bean);
  
  
  java.util.List<? extends entity.GL7ExposureCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExposureCovCostVersionList> getCosts();
  
  
  
}