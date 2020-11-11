package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineCov.eti;GL7SublineCov.eix;GL7SublineCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublineCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7SublineCovCost bean);
  
  
  java.util.List<? extends entity.GL7SublineCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineCovCostVersionList> getCosts();
  
  
  
}