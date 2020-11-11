package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineSchedCov.eti;GL7SublineSchedCov.eix;GL7SublineSchedCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineSchedCovVersionList extends entity.windowed.GL7SublineCovVersionList {
  entity.GL7SublineSchedCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineCovCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineSchedCovItem> GL7ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7SublineCovCost bean);
  
  
  void addToGL7ScheduledItems(entity.GL7SublineSchedCovItem bean);
  
  
  java.util.List<? extends entity.GL7SublineSchedCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineCovCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublineSchedCovItemVersionList> getGL7ScheduledItems();
  
  
  
}