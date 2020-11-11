package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineExcl.eti;GL7SublineExcl.eix;GL7SublineExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublineExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineExclCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7SublineExclCost bean);
  
  
  java.util.List<? extends entity.GL7SublineExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineExclCostVersionList> getCosts();
  
  
  
}