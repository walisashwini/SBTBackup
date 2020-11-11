package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedExclItemCost.eti;GL7LocSchedExclItemCost.eix;GL7LocSchedExclItemCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocSchedExclItemCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocSchedExclItemCostVersionList {
  public GL7LocSchedExclItemCostVersionListImpl(entity.GL7LocSchedExclItemCost base)  {
    super(base);
  }
  
  public GL7LocSchedExclItemCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocSchedExclItemCost AsOf(java.util.Date date) {
    return (entity.GL7LocSchedExclItemCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7Transaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocSchedExclItemCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.GL7Transaction bean) {
    addToArray(entity.GL7LocSchedExclItemCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedExclItemCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7TransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.GL7LocSchedExclItemCost.TRANSACTIONS_PROP.get());
  }
  
  
}