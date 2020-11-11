package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCovItmCond.eti;GL7SublnTypSchCovItmCond.eix;GL7SublnTypSchCovItmCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnTypSchCovItmCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnTypSchCovItmCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCovItemCondCost> SublnTypSchCovItemCondCostsAsOf(java.util.Date date);
  
  
  void addToSublnTypSchCovItemCondCosts(entity.GL7SublnTypSchCovItemCondCost bean);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCovItmCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCovItemCondCostVersionList> getSublnTypSchCovItemCondCosts();
  
  
  
}