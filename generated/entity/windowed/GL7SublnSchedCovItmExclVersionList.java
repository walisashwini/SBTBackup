package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCovItmExcl.eti;GL7SublnSchedCovItmExcl.eix;GL7SublnSchedCovItmExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnSchedCovItmExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnSchedCovItmExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCovItemExclCost> SublnSchedCovItemExclCostsAsOf(java.util.Date date);
  
  
  void addToSublnSchedCovItemExclCosts(entity.GL7SublnSchedCovItemExclCost bean);
  
  
  java.util.List<? extends entity.GL7SublnSchedCovItmExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCovItemExclCostVersionList> getSublnSchedCovItemExclCosts();
  
  
  
}