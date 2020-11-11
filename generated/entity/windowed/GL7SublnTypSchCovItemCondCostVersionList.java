package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCovItemCondCost.eti;GL7SublnTypSchCovItemCondCost.eix;GL7SublnTypSchCovItemCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnTypSchCovItemCondCostVersionList extends entity.windowed.GL7SublnTypSchCovItemCostVersionList {
  entity.GL7SublnTypSchCovItemCondCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7Transaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.GL7Transaction bean);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCovItemCondCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7TransactionVersionList> getTransactions();
  
  
  
}