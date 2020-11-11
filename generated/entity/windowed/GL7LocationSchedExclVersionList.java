package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationSchedExcl.eti;GL7LocationSchedExcl.eix;GL7LocationSchedExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocationSchedExclVersionList extends entity.windowed.GL7LocationExclVersionList {
  entity.GL7LocationSchedExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocationExclCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocationSchedExclItem> GL7ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7LocationExclCost bean);
  
  
  void addToGL7ScheduledItems(entity.GL7LocationSchedExclItem bean);
  
  
  java.util.List<? extends entity.GL7LocationSchedExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocationExclCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7LocationSchedExclItemVersionList> getGL7ScheduledItems();
  
  
  
}