package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCovItmCond.eti;GL7SublnSchedCovItmCond.eix;GL7SublnSchedCovItmCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnSchedCovItmCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnSchedCovItmCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCovItemCondCost> SublnSchedCovItemCondCostsAsOf(java.util.Date date);
  
  
  void addToSublnSchedCovItemCondCosts(entity.GL7SublnSchedCovItemCondCost bean);
  
  
  java.util.List<? extends entity.GL7SublnSchedCovItmCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCovItemCondCostVersionList> getSublnSchedCovItemCondCosts();
  
  
  
}