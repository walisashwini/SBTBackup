package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationExcl.eti;GL7LocationExcl.eix;GL7LocationExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocationExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LocationExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocationExclCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7LocationExclCost bean);
  
  
  java.util.List<? extends entity.GL7LocationExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocationExclCostVersionList> getCosts();
  
  
  
}