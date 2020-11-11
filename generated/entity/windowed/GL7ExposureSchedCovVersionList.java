package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureSchedCov.eti;GL7ExposureSchedCov.eix;GL7ExposureSchedCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExposureSchedCovVersionList extends entity.windowed.GL7ExposureCovVersionList {
  entity.GL7ExposureSchedCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExposureCovCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExposureSchedCovItem> GL7ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7ExposureCovCost bean);
  
  
  void addToGL7ScheduledItems(entity.GL7ExposureSchedCovItem bean);
  
  
  java.util.List<? extends entity.GL7ExposureSchedCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExposureCovCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7ExposureSchedCovItemVersionList> getGL7ScheduledItems();
  
  
  
}