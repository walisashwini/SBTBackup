package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UnmannedAircraftExcl.eti;GL7UnmannedAircraftExcl.eix;GL7UnmannedAircraftExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7UnmannedAircraftExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7UnmannedAircraftExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UnmannedAircraftExclCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7UnmannedAircraftExclCost bean);
  
  
  java.util.List<? extends entity.GL7UnmannedAircraftExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7UnmannedAircraftExclCostVersionList> getCosts();
  
  
  
}