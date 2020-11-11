package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchExclItmCond.eti;GL7SublnTypSchExclItmCond.eix;GL7SublnTypSchExclItmCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnTypSchExclItmCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnTypSchExclItmCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchExclItemCondCost> SublnTypSchExclItemCondCostsAsOf(java.util.Date date);
  
  
  void addToSublnTypSchExclItemCondCosts(entity.GL7SublnTypSchExclItemCondCost bean);
  
  
  java.util.List<? extends entity.GL7SublnTypSchExclItmCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchExclItemCondCostVersionList> getSublnTypSchExclItemCondCosts();
  
  
  
}