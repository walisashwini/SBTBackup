package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCovItemCond.eti;GL7ExpSchedCovItemCond.eix;GL7ExpSchedCovItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExpSchedCovItemCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7ExpSchedCovItemCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCovItemCondCost> ExpSchedCovItemCondCostsAsOf(java.util.Date date);
  
  
  void addToExpSchedCovItemCondCosts(entity.GL7ExpSchedCovItemCondCost bean);
  
  
  java.util.List<? extends entity.GL7ExpSchedCovItemCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCovItemCondCostVersionList> getExpSchedCovItemCondCosts();
  
  
  
}