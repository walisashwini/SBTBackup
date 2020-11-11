package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedExclItem.eti;GL7UAircrSchedExclItem.eix;GL7UAircrSchedExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7UAircrSchedExclItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7UAircrSchedExclItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UAircrSchedExclItemCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UAircrSchedExclItemCov> CoveragesAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7UAircrSchedExclItemCost bean);
  
  
  void addToCoverages(entity.GL7UAircrSchedExclItemCov bean);
  
  
  java.util.List<? extends entity.GL7UAircrSchedExclItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7UAircrSchedExclItemCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7UAircrSchedExclItemCovVersionList> getCoverages();
  
  
  
}