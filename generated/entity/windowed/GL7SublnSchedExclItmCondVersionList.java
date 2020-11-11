package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedExclItmCond.eti;GL7SublnSchedExclItmCond.eix;GL7SublnSchedExclItmCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnSchedExclItmCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnSchedExclItmCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedExclItemCondCost> SublnSchedExclItemCondCostsAsOf(java.util.Date date);
  
  
  void addToSublnSchedExclItemCondCosts(entity.GL7SublnSchedExclItemCondCost bean);
  
  
  java.util.List<? extends entity.GL7SublnSchedExclItmCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedExclItemCondCostVersionList> getSublnSchedExclItemCondCosts();
  
  
  
}