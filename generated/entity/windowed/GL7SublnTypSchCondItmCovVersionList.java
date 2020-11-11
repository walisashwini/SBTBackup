package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCondItmCov.eti;GL7SublnTypSchCondItmCov.eix;GL7SublnTypSchCondItmCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnTypSchCondItmCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnTypSchCondItmCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCondItemCovCost> SublnTypSchCondItemCovCostsAsOf(java.util.Date date);
  
  
  void addToSublnTypSchCondItemCovCosts(entity.GL7SublnTypSchCondItemCovCost bean);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCondItmCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCondItemCovCostVersionList> getSublnTypSchCondItemCovCosts();
  
  
  
}