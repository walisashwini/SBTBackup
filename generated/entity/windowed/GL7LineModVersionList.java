package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineMod.eti;GL7LineMod.eix;GL7LineMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LineModVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LineMod AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineRF> GL7LineRateFactorsAsOf(java.util.Date date);
  
  
  void addToGL7LineRateFactors(entity.GL7LineRF bean);
  
  
  java.util.List<? extends entity.GL7LineMod> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LineRFVersionList> getGL7LineRateFactors();
  
  
  
}