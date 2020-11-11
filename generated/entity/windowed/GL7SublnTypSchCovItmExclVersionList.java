package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCovItmExcl.eti;GL7SublnTypSchCovItmExcl.eix;GL7SublnTypSchCovItmExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnTypSchCovItmExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnTypSchCovItmExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCovItemExclCost> SublnTypSchCovItemExclCostsAsOf(java.util.Date date);
  
  
  void addToSublnTypSchCovItemExclCosts(entity.GL7SublnTypSchCovItemExclCost bean);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCovItmExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCovItemExclCostVersionList> getSublnTypSchCovItemExclCosts();
  
  
  
}