package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedExclItemCovCost.eti;GL7UAircrSchedExclItemCovCost.eix;GL7UAircrSchedExclItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7UAircrSchedExclItemCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7UAircrSchedExclItemCovCostVersionList {
  public GL7UAircrSchedExclItemCovCostVersionListImpl(entity.GL7UAircrSchedExclItemCovCost base)  {
    super(base);
  }
  
  public GL7UAircrSchedExclItemCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7UAircrSchedExclItemCovCost AsOf(java.util.Date date) {
    return (entity.GL7UAircrSchedExclItemCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7Transaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UAircrSchedExclItemCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.GL7Transaction bean) {
    addToArray(entity.GL7UAircrSchedExclItemCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedExclItemCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7TransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.GL7UAircrSchedExclItemCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}