package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeCov.eti;GL7SublineTypeCov.eix;GL7SublineTypeCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineTypeCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublineTypeCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineTypeCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7SublineTypeCovCost bean);
  
  
  java.util.List<? extends entity.GL7SublineTypeCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineTypeCovCostVersionList> getCosts();
  
  
  
}