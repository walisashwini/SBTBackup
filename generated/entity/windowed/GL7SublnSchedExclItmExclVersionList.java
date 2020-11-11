package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedExclItmExcl.eti;GL7SublnSchedExclItmExcl.eix;GL7SublnSchedExclItmExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnSchedExclItmExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnSchedExclItmExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedExclItemExclCost> SublnSchedExclItemExclCostsAsOf(java.util.Date date);
  
  
  void addToSublnSchedExclItemExclCosts(entity.GL7SublnSchedExclItemExclCost bean);
  
  
  java.util.List<? extends entity.GL7SublnSchedExclItmExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedExclItemExclCostVersionList> getSublnSchedExclItemExclCosts();
  
  
  
}