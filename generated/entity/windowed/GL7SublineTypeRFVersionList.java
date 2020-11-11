package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeRF.eti;GL7SublineTypeRF.eix;GL7SublineTypeRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineTypeRFVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublineTypeRF AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineTypeRF> getAllVersions();
  
  
  
}