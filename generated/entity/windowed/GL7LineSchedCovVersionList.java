package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineSchedCov.eti;GL7LineSchedCov.eix;GL7LineSchedCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LineSchedCovVersionList extends entity.windowed.GL7LineCovVersionList {
  entity.GL7LineSchedCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineCovCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineSchCovItem> GL7ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7LineCovCost bean);
  
  
  void addToGL7ScheduledItems(entity.GL7LineSchCovItem bean);
  
  
  java.util.List<? extends entity.GL7LineSchedCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LineCovCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7LineSchCovItemVersionList> getGL7ScheduledItems();
  
  
  
}