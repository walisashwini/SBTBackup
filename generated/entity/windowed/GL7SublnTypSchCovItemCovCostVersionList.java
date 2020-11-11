package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCovItemCovCost.eti;GL7SublnTypSchCovItemCovCost.eix;GL7SublnTypSchCovItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnTypSchCovItemCovCostVersionList extends entity.windowed.GL7SublnTypSchCovItemCostVersionList {
  entity.GL7SublnTypSchCovItemCovCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7Transaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.GL7Transaction bean);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCovItemCovCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7TransactionVersionList> getTransactions();
  
  
  
}