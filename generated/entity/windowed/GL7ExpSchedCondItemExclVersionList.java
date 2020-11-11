package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCondItemExcl.eti;GL7ExpSchedCondItemExcl.eix;GL7ExpSchedCondItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExpSchedCondItemExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7ExpSchedCondItemExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCondItemExclCost> ExpSchedCondItemExclCostsAsOf(java.util.Date date);
  
  
  void addToExpSchedCondItemExclCosts(entity.GL7ExpSchedCondItemExclCost bean);
  
  
  java.util.List<? extends entity.GL7ExpSchedCondItemExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCondItemExclCostVersionList> getExpSchedCondItemExclCosts();
  
  
  
}