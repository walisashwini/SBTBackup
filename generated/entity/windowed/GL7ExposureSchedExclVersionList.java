package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureSchedExcl.eti;GL7ExposureSchedExcl.eix;GL7ExposureSchedExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExposureSchedExclVersionList extends entity.windowed.GL7ExposureExclVersionList {
  entity.GL7ExposureSchedExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExposureExclCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExposureSchedExclItem> GL7ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7ExposureExclCost bean);
  
  
  void addToGL7ScheduledItems(entity.GL7ExposureSchedExclItem bean);
  
  
  java.util.List<? extends entity.GL7ExposureSchedExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExposureExclCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7ExposureSchedExclItemVersionList> getGL7ScheduledItems();
  
  
  
}