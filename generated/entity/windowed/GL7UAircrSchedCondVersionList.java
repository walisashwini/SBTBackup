package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCond.eti;GL7UAircrSchedCond.eix;GL7UAircrSchedCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7UAircrSchedCondVersionList extends entity.windowed.GL7UnmannedAircraftCondVersionList {
  entity.GL7UAircrSchedCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UnmannedAircraftCondCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UAircrSchedCondItem> ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7UnmannedAircraftCondCost bean);
  
  
  void addToScheduledItems(entity.GL7UAircrSchedCondItem bean);
  
  
  java.util.List<? extends entity.GL7UAircrSchedCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7UnmannedAircraftCondCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7UAircrSchedCondItemVersionList> getScheduledItems();
  
  
  
}