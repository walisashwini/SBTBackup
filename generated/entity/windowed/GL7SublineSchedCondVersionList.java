package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineSchedCond.eti;GL7SublineSchedCond.eix;GL7SublineSchedCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineSchedCondVersionList extends entity.windowed.GL7SublineCondVersionList {
  entity.GL7SublineSchedCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineCondCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineSchedCondItem> GL7ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7SublineCondCost bean);
  
  
  void addToGL7ScheduledItems(entity.GL7SublineSchedCondItem bean);
  
  
  java.util.List<? extends entity.GL7SublineSchedCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineCondCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublineSchedCondItemVersionList> getGL7ScheduledItems();
  
  
  
}