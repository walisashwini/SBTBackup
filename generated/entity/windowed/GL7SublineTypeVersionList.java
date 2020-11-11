package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineType.eti;GL7SublineType.eix;GL7SublineType.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineTypeVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublineType AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineTypeCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineTypeCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineTypeExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7Location> LocationsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineTypeMod> ModifiersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7Subline> SublinesAsOf(java.util.Date date);
  
  
  void addToConditions(entity.GL7SublineTypeCond bean);
  
  
  void addToCoverages(entity.GL7SublineTypeCov bean);
  
  
  void addToExclusions(entity.GL7SublineTypeExcl bean);
  
  
  void addToLocations(entity.GL7Location bean);
  
  
  void addToModifiers(entity.GL7SublineTypeMod bean);
  
  
  void addToSublines(entity.GL7Subline bean);
  
  
  java.util.List<? extends entity.GL7SublineType> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineTypeCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineTypeCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.GL7SublineTypeExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.GL7LocationVersionList> getLocations();
  
  
  java.util.List<? extends entity.windowed.GL7SublineTypeModVersionList> getModifiers();
  
  
  java.util.List<? extends entity.windowed.GL7SublineVersionList> getSublines();
  
  
  
}