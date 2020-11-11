package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedExclItemExcl.eti;GL7ExpSchedExclItemExcl.eix;GL7ExpSchedExclItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExpSchedExclItemExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7ExpSchedExclItemExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedExclItemExclCost> ExpSchedExclItemExclCostsAsOf(java.util.Date date);
  
  
  void addToExpSchedExclItemExclCosts(entity.GL7ExpSchedExclItemExclCost bean);
  
  
  java.util.List<? extends entity.GL7ExpSchedExclItemExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedExclItemExclCostVersionList> getExpSchedExclItemExclCosts();
  
  
  
}