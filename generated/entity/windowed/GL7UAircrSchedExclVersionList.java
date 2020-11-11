package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedExcl.eti;GL7UAircrSchedExcl.eix;GL7UAircrSchedExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7UAircrSchedExclVersionList extends entity.windowed.GL7UnmannedAircraftExclVersionList {
  entity.GL7UAircrSchedExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UnmannedAircraftExclCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UAircrSchedExclItem> ScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7UnmannedAircraftExclCost bean);
  
  
  void addToScheduledItems(entity.GL7UAircrSchedExclItem bean);
  
  
  java.util.List<? extends entity.GL7UAircrSchedExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7UnmannedAircraftExclCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7UAircrSchedExclItemVersionList> getScheduledItems();
  
  
  
}