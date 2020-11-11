package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureCond.eti;GL7ExposureCond.eix;GL7ExposureCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExposureCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7ExposureCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExposureCondCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GL7ExposureCondCost bean);
  
  
  java.util.List<? extends entity.GL7ExposureCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExposureCondCostVersionList> getCosts();
  
  
  
}