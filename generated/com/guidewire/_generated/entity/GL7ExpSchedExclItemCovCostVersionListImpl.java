package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedExclItemCovCost.eti;GL7ExpSchedExclItemCovCost.eix;GL7ExpSchedExclItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExpSchedExclItemCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExpSchedExclItemCovCostVersionList {
  public GL7ExpSchedExclItemCovCostVersionListImpl(entity.GL7ExpSchedExclItemCovCost base)  {
    super(base);
  }
  
  public GL7ExpSchedExclItemCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExpSchedExclItemCovCost AsOf(java.util.Date date) {
    return (entity.GL7ExpSchedExclItemCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7Transaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExpSchedExclItemCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.GL7Transaction bean) {
    addToArray(entity.GL7ExpSchedExclItemCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedExclItemCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7TransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.GL7ExpSchedExclItemCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}