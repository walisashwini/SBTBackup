package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCondItem.eti;GL7UAircrSchedCondItem.eix;GL7UAircrSchedCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7UAircrSchedCondItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7UAircrSchedCondItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UAircrSchedCondItemCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UAircrSchedCondItemCov> CoveragesAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7UAircrSchedCondItemCost bean);
  
  
  void addToCoverages(entity.GL7UAircrSchedCondItemCov bean);
  
  
  java.util.List<? extends entity.GL7UAircrSchedCondItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7UAircrSchedCondItemCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GL7UAircrSchedCondItemCovVersionList> getCoverages();
  
  
  
}