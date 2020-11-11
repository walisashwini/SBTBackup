package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineRF.eti;GL7SublineRF.eix;GL7SublineRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineRFVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublineRF AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineRF> getAllVersions();
  
  
  
}