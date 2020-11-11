package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCondItemCond.eti;GL7LocSchedCondItemCond.eix;GL7LocSchedCondItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocSchedCondItemCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LocSchedCondItemCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCondItemCondCost> LocSchedCondItemCondCostsAsOf(java.util.Date date);
  
  
  void addToLocSchedCondItemCondCosts(entity.GL7LocSchedCondItemCondCost bean);
  
  
  java.util.List<? extends entity.GL7LocSchedCondItemCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCondItemCondCostVersionList> getLocSchedCondItemCondCosts();
  
  
  
}