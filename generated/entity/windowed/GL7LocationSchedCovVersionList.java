package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationSchedCov.eti;GL7LocationSchedCov.eix;GL7LocationSchedCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocationSchedCovVersionList extends entity.windowed.GL7LocationCovVersionList {
  entity.GL7LocationSchedCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocationCovCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocationSchedCovItem> GL7ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7LocationCovCost bean);
  
  
  void addToGL7ScheduledItems(entity.GL7LocationSchedCovItem bean);
  
  
  java.util.List<? extends entity.GL7LocationSchedCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocationCovCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7LocationSchedCovItemVersionList> getGL7ScheduledItems();
  
  
  
}