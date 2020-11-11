package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineExcl.eti;GL7LineExcl.eix;GL7LineExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LineExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LineExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineExclCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7LineExclCost bean);
  
  
  java.util.List<? extends entity.GL7LineExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LineExclCostVersionList> getCosts();
  
  
  
}