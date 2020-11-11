package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedExclItemExcl.eti;GL7LocSchedExclItemExcl.eix;GL7LocSchedExclItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocSchedExclItemExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LocSchedExclItemExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedExclItemExclCost> LocSchedExclItemExclCostsAsOf(java.util.Date date);
  
  
  void addToLocSchedExclItemExclCosts(entity.GL7LocSchedExclItemExclCost bean);
  
  
  java.util.List<? extends entity.GL7LocSchedExclItemExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedExclItemExclCostVersionList> getLocSchedExclItemExclCosts();
  
  
  
}