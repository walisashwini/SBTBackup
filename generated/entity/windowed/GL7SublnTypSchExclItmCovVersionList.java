package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchExclItmCov.eti;GL7SublnTypSchExclItmCov.eix;GL7SublnTypSchExclItmCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnTypSchExclItmCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnTypSchExclItmCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchExclItemCovCost> SublnTypSchExclItemCovCostsAsOf(java.util.Date date);
  
  
  void addToSublnTypSchExclItemCovCosts(entity.GL7SublnTypSchExclItemCovCost bean);
  
  
  java.util.List<? extends entity.GL7SublnTypSchExclItmCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchExclItemCovCostVersionList> getSublnTypSchExclItemCovCosts();
  
  
  
}