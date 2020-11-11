package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedExclItemCond.eti;GL7ExpSchedExclItemCond.eix;GL7ExpSchedExclItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExpSchedExclItemCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7ExpSchedExclItemCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedExclItemCondCost> ExpSchedExclItemCondCostsAsOf(java.util.Date date);
  
  
  void addToExpSchedExclItemCondCosts(entity.GL7ExpSchedExclItemCondCost bean);
  
  
  java.util.List<? extends entity.GL7ExpSchedExclItemCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedExclItemCondCostVersionList> getExpSchedExclItemCondCosts();
  
  
  
}