package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineSchCondItem.eti;GL7LineSchCondItem.eix;GL7LineSchCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LineSchCondItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LineSchCondItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineSchCondItem> getAllVersions();
  
  
  
}