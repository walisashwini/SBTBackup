package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedExclItemExclCost.eti;GL7ExpSchedExclItemExclCost.eix;GL7ExpSchedExclItemExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExpSchedExclItemExclCostVersionList extends entity.windowed.GL7ExpSchedExclItemCostVersionList {
  entity.GL7ExpSchedExclItemExclCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7Transaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.GL7Transaction bean);
  
  
  java.util.List<? extends entity.GL7ExpSchedExclItemExclCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7TransactionVersionList> getTransactions();
  
  
  
}