package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationMod.eti;GL7LocationMod.eix;GL7LocationMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocationModVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LocationMod AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocationRF> GL7LocationRateFactorsAsOf(java.util.Date date);
  
  
  void addToGL7LocationRateFactors(entity.GL7LocationRF bean);
  
  
  java.util.List<? extends entity.GL7LocationMod> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocationRFVersionList> getGL7LocationRateFactors();
  
  
  
}