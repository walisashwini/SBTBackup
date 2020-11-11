package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineMod.eti;GL7SublineMod.eix;GL7SublineMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineModVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublineMod AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineRF> GL7SublineRateFactorsAsOf(java.util.Date date);
  
  
  void addToGL7SublineRateFactors(entity.GL7SublineRF bean);
  
  
  java.util.List<? extends entity.GL7SublineMod> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineRFVersionList> getGL7SublineRateFactors();
  
  
  
}