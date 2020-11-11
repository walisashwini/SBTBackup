package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCondItemCov.eti;GL7ExpSchedCondItemCov.eix;GL7ExpSchedCondItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExpSchedCondItemCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7ExpSchedCondItemCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCondItemCovCost> ExpSchedCondItemCovCostsAsOf(java.util.Date date);
  
  
  void addToExpSchedCondItemCovCosts(entity.GL7ExpSchedCondItemCovCost bean);
  
  
  java.util.List<? extends entity.GL7ExpSchedCondItemCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCondItemCovCostVersionList> getExpSchedCondItemCovCosts();
  
  
  
}