package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCondItemCondCost.eti;GL7ExpSchedCondItemCondCost.eix;GL7ExpSchedCondItemCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExpSchedCondItemCondCostVersionList extends entity.windowed.GL7ExpSchedCondItemCostVersionList {
  entity.GL7ExpSchedCondItemCondCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7Transaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.GL7Transaction bean);
  
  
  java.util.List<? extends entity.GL7ExpSchedCondItemCondCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7TransactionVersionList> getTransactions();
  
  
  
}