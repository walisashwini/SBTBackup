package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineSchedCond.eti;GL7LineSchedCond.eix;GL7LineSchedCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LineSchedCondVersionList extends entity.windowed.GL7LineCondVersionList {
  entity.GL7LineSchedCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineCondCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineSchCondItem> GL7ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7LineCondCost bean);
  
  
  void addToGL7ScheduledItems(entity.GL7LineSchCondItem bean);
  
  
  java.util.List<? extends entity.GL7LineSchedCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LineCondCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7LineSchCondItemVersionList> getGL7ScheduledItems();
  
  
  
}