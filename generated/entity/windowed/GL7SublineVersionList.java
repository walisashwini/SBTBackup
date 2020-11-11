package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7Subline.eti;GL7Subline.eix;GL7Subline.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7Subline AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineMod> ModifiersAsOf(java.util.Date date);
  
  
  void addToConditions(entity.GL7SublineCond bean);
  
  
  void addToCoverages(entity.GL7SublineCov bean);
  
  
  void addToExclusions(entity.GL7SublineExcl bean);
  
  
  void addToModifiers(entity.GL7SublineMod bean);
  
  
  java.util.List<? extends entity.GL7Subline> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.GL7SublineExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineModVersionList> getModifiers();
  
  
  
}