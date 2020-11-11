package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeSchedCond.eti;GL7SublineTypeSchedCond.eix;GL7SublineTypeSchedCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineTypeSchedCondVersionList extends entity.windowed.GL7SublineTypeCondVersionList {
  entity.GL7SublineTypeSchedCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineTypeCondCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineTypeSchCondItem> GL7ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7SublineTypeCondCost bean);
  
  
  void addToGL7ScheduledItems(entity.GL7SublineTypeSchCondItem bean);
  
  
  java.util.List<? extends entity.GL7SublineTypeSchedCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineTypeCondCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublineTypeSchCondItemVersionList> getGL7ScheduledItems();
  
  
  
}