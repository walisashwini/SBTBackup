package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeMod.eti;GL7SublineTypeMod.eix;GL7SublineTypeMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineTypeModVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublineTypeMod AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineTypeRF> GL7SublineTypeRateFactorsAsOf(java.util.Date date);
  
  
  void addToGL7SublineTypeRateFactors(entity.GL7SublineTypeRF bean);
  
  
  java.util.List<? extends entity.GL7SublineTypeMod> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublineTypeRFVersionList> getGL7SublineTypeRateFactors();
  
  
  
}