package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureRF.eti;GL7ExposureRF.eix;GL7ExposureRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExposureRFVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7ExposureRF AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExposureRF> getAllVersions();
  
  
  
}