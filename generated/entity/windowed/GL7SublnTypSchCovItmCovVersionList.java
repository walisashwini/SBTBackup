package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCovItmCov.eti;GL7SublnTypSchCovItmCov.eix;GL7SublnTypSchCovItmCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnTypSchCovItmCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnTypSchCovItmCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCovItemCovCost> SublnTypSchCovItemCovCostsAsOf(java.util.Date date);
  
  
  void addToSublnTypSchCovItemCovCosts(entity.GL7SublnTypSchCovItemCovCost bean);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCovItmCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCovItemCovCostVersionList> getSublnTypSchCovItemCovCosts();
  
  
  
}