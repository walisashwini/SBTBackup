package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCondItemCost.eti;GL7ExpSchedCondItemCost.eix;GL7ExpSchedCondItemCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExpSchedCondItemCostVersionList extends entity.windowed.GL7CostVersionList {
  entity.GL7ExpSchedCondItemCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7Transaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.GL7Transaction bean);
  
  
  java.util.List<? extends entity.GL7ExpSchedCondItemCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7TransactionVersionList> getTransactions();
  
  
  
}