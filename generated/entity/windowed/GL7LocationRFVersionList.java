package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationRF.eti;GL7LocationRF.eix;GL7LocationRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocationRFVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LocationRF AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocationRF> getAllVersions();
  
  
  
}