package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskField.eti;APDRiskField.eix;APDRiskField.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDRiskFieldVersionList extends entity.windowed.APDDataFieldVersionList {
  entity.APDRiskField AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskField> getAllVersions();
  
  
  
}