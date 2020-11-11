package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCondItmExcl.eti;GL7SublnSchedCondItmExcl.eix;GL7SublnSchedCondItmExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnSchedCondItmExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnSchedCondItmExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCondItemExclCost> SublnSchedCondItemExclCostsAsOf(java.util.Date date);
  
  
  void addToSublnSchedCondItemExclCosts(entity.GL7SublnSchedCondItemExclCost bean);
  
  
  java.util.List<? extends entity.GL7SublnSchedCondItmExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCondItemExclCostVersionList> getSublnSchedCondItemExclCosts();
  
  
  
}