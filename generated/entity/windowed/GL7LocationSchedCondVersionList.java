package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationSchedCond.eti;GL7LocationSchedCond.eix;GL7LocationSchedCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocationSchedCondVersionList extends entity.windowed.GL7LocationCondVersionList {
  entity.GL7LocationSchedCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocationCondCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocationSchedCondItem> GL7ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7LocationCondCost bean);
  
  
  void addToGL7ScheduledItems(entity.GL7LocationSchedCondItem bean);
  
  
  java.util.List<? extends entity.GL7LocationSchedCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocationCondCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7LocationSchedCondItemVersionList> getGL7ScheduledItems();
  
  
  
}