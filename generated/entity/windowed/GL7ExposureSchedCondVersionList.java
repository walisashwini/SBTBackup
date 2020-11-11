package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureSchedCond.eti;GL7ExposureSchedCond.eix;GL7ExposureSchedCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExposureSchedCondVersionList extends entity.windowed.GL7ExposureCondVersionList {
  entity.GL7ExposureSchedCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExposureCondCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExposureSchedCondItem> GL7ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7ExposureCondCost bean);
  
  
  void addToGL7ScheduledItems(entity.GL7ExposureSchedCondItem bean);
  
  
  java.util.List<? extends entity.GL7ExposureSchedCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExposureCondCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7ExposureSchedCondItemVersionList> getGL7ScheduledItems();
  
  
  
}