package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeSchedCov.eti;GL7SublineTypeSchedCov.eix;GL7SublineTypeSchedCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineTypeSchedCovVersionList extends entity.windowed.GL7SublineTypeCovVersionList {
  entity.GL7SublineTypeSchedCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineTypeCovCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineTypeSchCovItem> GL7ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7SublineTypeCovCost bean);
  
  
  void addToGL7ScheduledItems(entity.GL7SublineTypeSchCovItem bean);
  
  
  java.util.List<? extends entity.GL7SublineTypeSchedCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineTypeCovCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublineTypeSchCovItemVersionList> getGL7ScheduledItems();
  
  
  
}