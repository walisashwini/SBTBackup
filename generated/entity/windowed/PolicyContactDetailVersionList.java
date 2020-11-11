package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyContactDetail.eti;PolicyContactDetail.eix;PolicyContactDetail.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyContactDetailVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.PolicyContactDetail AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyContactDetail> getAllVersions();
  
  
  
}