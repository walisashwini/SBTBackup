package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7Exposure.eti;GL7Exposure.eix;GL7Exposure.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExposureVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7Exposure AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExposureCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExposureCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExposureExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExposureMod> GL7ExposureModsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UnmannedAircraft> UnmannedAircraftsAsOf(java.util.Date date);
  
  
  void addToConditions(entity.GL7ExposureCond bean);
  
  
  void addToCoverages(entity.GL7ExposureCov bean);
  
  
  void addToExclusions(entity.GL7ExposureExcl bean);
  
  
  void addToGL7ExposureMods(entity.GL7ExposureMod bean);
  
  
  void addToUnmannedAircrafts(entity.GL7UnmannedAircraft bean);
  
  
  java.util.List<? extends entity.GL7Exposure> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExposureCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.GL7ExposureCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.GL7ExposureExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.GL7ExposureModVersionList> getGL7ExposureMods();
  
  
  java.util.List<? extends entity.windowed.GL7UnmannedAircraftVersionList> getUnmannedAircrafts();
  
  
  
}