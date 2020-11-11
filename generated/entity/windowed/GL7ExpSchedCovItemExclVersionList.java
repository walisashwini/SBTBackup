package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCovItemExcl.eti;GL7ExpSchedCovItemExcl.eix;GL7ExpSchedCovItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExpSchedCovItemExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7ExpSchedCovItemExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCovItemExclCost> ExpSchedCovItemExclCostsAsOf(java.util.Date date);
  
  
  void addToExpSchedCovItemExclCosts(entity.GL7ExpSchedCovItemExclCost bean);
  
  
  java.util.List<? extends entity.GL7ExpSchedCovItemExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCovItemExclCostVersionList> getExpSchedCovItemExclCosts();
  
  
  
}