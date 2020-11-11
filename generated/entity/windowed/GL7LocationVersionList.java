package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7Location.eti;GL7Location.eix;GL7Location.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocationVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7Location AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocationCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocationCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocationExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7Exposure> GL7ExposuresAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocationMod> GL7LocationModsAsOf(java.util.Date date);
  
  
  void addToConditions(entity.GL7LocationCond bean);
  
  
  void addToCoverages(entity.GL7LocationCov bean);
  
  
  void addToExclusions(entity.GL7LocationExcl bean);
  
  
  void addToGL7Exposures(entity.GL7Exposure bean);
  
  
  void addToGL7LocationMods(entity.GL7LocationMod bean);
  
  
  java.util.List<? extends entity.GL7Location> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocationCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.GL7LocationCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.GL7LocationExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.GL7ExposureVersionList> getGL7Exposures();
  
  
  java.util.List<? extends entity.windowed.GL7LocationModVersionList> getGL7LocationMods();
  
  
  
}