package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCondItemExclCost.eti;GL7SublnTypSchCondItemExclCost.eix;GL7SublnTypSchCondItemExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnTypSchCondItemExclCostVersionList extends entity.windowed.GL7SublnTypSchCondItemCostVersionList {
  entity.GL7SublnTypSchCondItemExclCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7Transaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.GL7Transaction bean);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCondItemExclCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7TransactionVersionList> getTransactions();
  
  
  
}