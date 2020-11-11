package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCov.eti;GL7UAircrSchedCov.eix;GL7UAircrSchedCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7UAircrSchedCovVersionList extends entity.windowed.GL7UnmannedAircraftCovVersionList {
  entity.GL7UAircrSchedCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UnmannedAircraftCovCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UAircrSchedCovItem> ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7UnmannedAircraftCovCost bean);
  
  
  void addToScheduledItems(entity.GL7UAircrSchedCovItem bean);
  
  
  java.util.List<? extends entity.GL7UAircrSchedCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7UnmannedAircraftCovCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7UAircrSchedCovItemVersionList> getScheduledItems();
  
  
  
}