package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineSchedExcl.eti;GL7SublineSchedExcl.eix;GL7SublineSchedExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineSchedExclVersionList extends entity.windowed.GL7SublineExclVersionList {
  entity.GL7SublineSchedExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineExclCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineSchedExclItem> GL7ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7SublineExclCost bean);
  
  
  void addToGL7ScheduledItems(entity.GL7SublineSchedExclItem bean);
  
  
  java.util.List<? extends entity.GL7SublineSchedExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineExclCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublineSchedExclItemVersionList> getGL7ScheduledItems();
  
  
  
}