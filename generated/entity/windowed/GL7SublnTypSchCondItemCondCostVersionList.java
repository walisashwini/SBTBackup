package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCondItemCondCost.eti;GL7SublnTypSchCondItemCondCost.eix;GL7SublnTypSchCondItemCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublnTypSchCondItemCondCostVersionList extends entity.windowed.GL7SublnTypSchCondItemCostVersionList {
  entity.GL7SublnTypSchCondItemCondCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7Transaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.GL7Transaction bean);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCondItemCondCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7TransactionVersionList> getTransactions();
  
  
  
}