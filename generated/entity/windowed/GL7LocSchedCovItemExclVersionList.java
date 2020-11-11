package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCovItemExcl.eti;GL7LocSchedCovItemExcl.eix;GL7LocSchedCovItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocSchedCovItemExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LocSchedCovItemExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCovItemExclCost> LocSchedCovItemExclCostsAsOf(java.util.Date date);
  
  
  void addToLocSchedCovItemExclCosts(entity.GL7LocSchedCovItemExclCost bean);
  
  
  java.util.List<? extends entity.GL7LocSchedCovItemExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCovItemExclCostVersionList> getLocSchedCovItemExclCosts();
  
  
  
}