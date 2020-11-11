package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7StatRecord.eti;GL7StatRecord.eix;GL7StatRecord.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7StatRecordVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7StatRecord AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7StatRecord> getAllVersions();
  
  
  
}