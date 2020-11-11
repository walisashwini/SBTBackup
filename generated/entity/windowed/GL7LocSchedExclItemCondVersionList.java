package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedExclItemCond.eti;GL7LocSchedExclItemCond.eix;GL7LocSchedExclItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocSchedExclItemCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LocSchedExclItemCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedExclItemCondCost> LocSchedExclItemCondCostsAsOf(java.util.Date date);
  
  
  void addToLocSchedExclItemCondCosts(entity.GL7LocSchedExclItemCondCost bean);
  
  
  java.util.List<? extends entity.GL7LocSchedExclItemCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedExclItemCondCostVersionList> getLocSchedExclItemCondCosts();
  
  
  
}