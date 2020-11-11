package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCondItmCond.eti;GL7SublnTypSchCondItmCond.eix;GL7SublnTypSchCondItmCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnTypSchCondItmCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnTypSchCondItmCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCondItemCondCost> SublnTypSchCondItemCondCostsAsOf(java.util.Date date);
  
  
  void addToSublnTypSchCondItemCondCosts(entity.GL7SublnTypSchCondItemCondCost bean);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCondItmCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCondItemCondCostVersionList> getSublnTypSchCondItemCondCosts();
  
  
  
}