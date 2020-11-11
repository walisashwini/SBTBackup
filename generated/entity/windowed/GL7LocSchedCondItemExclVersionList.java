package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCondItemExcl.eti;GL7LocSchedCondItemExcl.eix;GL7LocSchedCondItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocSchedCondItemExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LocSchedCondItemExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCondItemExclCost> LocSchedCondItemExclCostsAsOf(java.util.Date date);
  
  
  void addToLocSchedCondItemExclCosts(entity.GL7LocSchedCondItemExclCost bean);
  
  
  java.util.List<? extends entity.GL7LocSchedCondItemExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCondItemExclCostVersionList> getLocSchedCondItemExclCosts();
  
  
  
}