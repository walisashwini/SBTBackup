package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineCondCost.eti;GL7SublineCondCost.eix;GL7SublineCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineCondCostVersionList extends entity.windowed.GL7CostVersionList {
  entity.GL7SublineCondCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7Transaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.GL7Transaction bean);
  
  
  java.util.List<? extends entity.GL7SublineCondCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7TransactionVersionList> getTransactions();
  
  
  
}