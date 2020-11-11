package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineRF.eti;GL7LineRF.eix;GL7LineRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LineRFVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LineRF AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineRF> getAllVersions();
  
  
  
}