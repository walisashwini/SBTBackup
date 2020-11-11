package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UnmannedAircraft.eti;GL7UnmannedAircraft.eix;GL7UnmannedAircraft.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7UnmannedAircraftVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7UnmannedAircraft AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UnmannedAircraftCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UnmannedAircraftCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7UnmannedAircraftExcl> ExclusionsAsOf(java.util.Date date);
  
  
  void addToConditions(entity.GL7UnmannedAircraftCond bean);
  
  
  void addToCoverages(entity.GL7UnmannedAircraftCov bean);
  
  
  void addToExclusions(entity.GL7UnmannedAircraftExcl bean);
  
  
  java.util.List<? extends entity.GL7UnmannedAircraft> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7UnmannedAircraftCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.GL7UnmannedAircraftCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.GL7UnmannedAircraftExclVersionList> getExclusions();
  
  
  
}