package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCovItemCond.eti;GL7LocSchedCovItemCond.eix;GL7LocSchedCovItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocSchedCovItemCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LocSchedCovItemCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCovItemCondCost> LocSchedCovItemCondCostsAsOf(java.util.Date date);
  
  
  void addToLocSchedCovItemCondCosts(entity.GL7LocSchedCovItemCondCost bean);
  
  
  java.util.List<? extends entity.GL7LocSchedCovItemCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCovItemCondCostVersionList> getLocSchedCovItemCondCosts();
  
  
  
}