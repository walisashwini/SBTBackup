package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchExclItmExcl.eti;GL7SublnTypSchExclItmExcl.eix;GL7SublnTypSchExclItmExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnTypSchExclItmExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnTypSchExclItmExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchExclItemExclCost> SublnTypSchExclItemExclCostsAsOf(java.util.Date date);
  
  
  void addToSublnTypSchExclItemExclCosts(entity.GL7SublnTypSchExclItemExclCost bean);
  
  
  java.util.List<? extends entity.GL7SublnTypSchExclItmExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchExclItemExclCostVersionList> getSublnTypSchExclItemExclCosts();
  
  
  
}