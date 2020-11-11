package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureExcl.eti;GL7ExposureExcl.eix;GL7ExposureExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExposureExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7ExposureExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExposureExclCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7ExposureExclCost bean);
  
  
  java.util.List<? extends entity.GL7ExposureExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExposureExclCostVersionList> getCosts();
  
  
  
}