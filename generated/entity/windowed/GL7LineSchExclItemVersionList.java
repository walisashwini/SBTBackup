package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineSchExclItem.eti;GL7LineSchExclItem.eix;GL7LineSchExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LineSchExclItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LineSchExclItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineSchExclItem> getAllVersions();
  
  
  
}