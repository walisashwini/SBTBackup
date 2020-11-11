package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7Transaction.eti;GL7Transaction.eix;GL7Transaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7TransactionVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7Transaction AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7Transaction> getAllVersions();
  
  
  
}