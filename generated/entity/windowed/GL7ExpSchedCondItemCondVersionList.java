package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCondItemCond.eti;GL7ExpSchedCondItemCond.eix;GL7ExpSchedCondItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExpSchedCondItemCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7ExpSchedCondItemCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCondItemCondCost> ExpSchedCondItemCondCostsAsOf(java.util.Date date);
  
  
  void addToExpSchedCondItemCondCosts(entity.GL7ExpSchedCondItemCondCost bean);
  
  
  java.util.List<? extends entity.GL7ExpSchedCondItemCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCondItemCondCostVersionList> getExpSchedCondItemCondCosts();
  
  
  
}