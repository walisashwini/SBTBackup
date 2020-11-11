package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeExcl.eti;GL7SublineTypeExcl.eix;GL7SublineTypeExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineTypeExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublineTypeExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineTypeExclCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7SublineTypeExclCost bean);
  
  
  java.util.List<? extends entity.GL7SublineTypeExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineTypeExclCostVersionList> getCosts();
  
  
  
}