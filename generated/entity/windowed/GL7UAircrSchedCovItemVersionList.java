package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCovItem.eti;GL7UAircrSchedCovItem.eix;GL7UAircrSchedCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7UAircrSchedCovItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7UAircrSchedCovItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UAircrSchedCovItemCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UAircrSchedCovItemCov> CoveragesAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7UAircrSchedCovItemCost bean);
  
  
  void addToCoverages(entity.GL7UAircrSchedCovItemCov bean);
  
  
  java.util.List<? extends entity.GL7UAircrSchedCovItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7UAircrSchedCovItemCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7UAircrSchedCovItemCovVersionList> getCoverages();
  
  
  
}