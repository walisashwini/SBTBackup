package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeSchedExcl.eti;GL7SublineTypeSchedExcl.eix;GL7SublineTypeSchedExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineTypeSchedExclVersionList extends entity.windowed.GL7SublineTypeExclVersionList {
  entity.GL7SublineTypeSchedExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineTypeExclCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineTypeSchExclItem> GL7ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7SublineTypeExclCost bean);
  
  
  void addToGL7ScheduledItems(entity.GL7SublineTypeSchExclItem bean);
  
  
  java.util.List<? extends entity.GL7SublineTypeSchedExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineTypeExclCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublineTypeSchExclItemVersionList> getGL7ScheduledItems();
  
  
  
}