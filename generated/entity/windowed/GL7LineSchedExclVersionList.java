package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineSchedExcl.eti;GL7LineSchedExcl.eix;GL7LineSchedExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LineSchedExclVersionList extends entity.windowed.GL7LineExclVersionList {
  entity.GL7LineSchedExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineExclCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineSchExclItem> GL7ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7LineExclCost bean);
  
  
  void addToGL7ScheduledItems(entity.GL7LineSchExclItem bean);
  
  
  java.util.List<? extends entity.GL7LineSchedExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LineExclCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7LineSchExclItemVersionList> getGL7ScheduledItems();
  
  
  
}