package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCondItmExcl.eti;GL7SublnTypSchCondItmExcl.eix;GL7SublnTypSchCondItmExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnTypSchCondItmExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublnTypSchCondItmExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCondItemExclCost> SublnTypSchCondItemExclCostsAsOf(java.util.Date date);
  
  
  void addToSublnTypSchCondItemExclCosts(entity.GL7SublnTypSchCondItemExclCost bean);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCondItmExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCondItemExclCostVersionList> getSublnTypSchCondItemExclCosts();
  
  
  
}