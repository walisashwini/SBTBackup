package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureMod.eti;GL7ExposureMod.eix;GL7ExposureMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExposureModVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7ExposureMod AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExposureRF> GL7ExposureRateFactorsAsOf(java.util.Date date);
  
  
  void addToGL7ExposureRateFactors(entity.GL7ExposureRF bean);
  
  
  java.util.List<? extends entity.GL7ExposureMod> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExposureRFVersionList> getGL7ExposureRateFactors();
  
  
  
}