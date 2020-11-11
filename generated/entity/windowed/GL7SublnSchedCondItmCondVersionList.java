package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCondItmCond.eti;GL7SublnSchedCondItmCond.eix;GL7SublnSchedCondItmCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnSchedCondItmCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnSchedCondItmCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCondItemCondCost> SublnSchedCondItemCondCostsAsOf(java.util.Date date);
  
  
  void addToSublnSchedCondItemCondCosts(entity.GL7SublnSchedCondItemCondCost bean);
  
  
  java.util.List<? extends entity.GL7SublnSchedCondItmCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCondItemCondCostVersionList> getSublnSchedCondItemCondCosts();
  
  
  
}