package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineSchCovItem.eti;GL7LineSchCovItem.eix;GL7LineSchCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LineSchCovItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LineSchCovItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineSchCovItem> getAllVersions();
  
  
  
}