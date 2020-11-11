package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCondItemCondCost.eti;GL7SublnSchedCondItemCondCost.eix;GL7SublnSchedCondItemCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnSchedCondItemCondCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnSchedCondItemCondCostVersionList {
  public GL7SublnSchedCondItemCondCostVersionListImpl(entity.GL7SublnSchedCondItemCondCost base)  {
    super(base);
  }
  
  public GL7SublnSchedCondItemCondCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnSchedCondItemCondCost AsOf(java.util.Date date) {
    return (entity.GL7SublnSchedCondItemCondCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7Transaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnSchedCondItemCondCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.GL7Transaction bean) {
    addToArray(entity.GL7SublnSchedCondItemCondCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCondItemCondCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7TransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.GL7SublnSchedCondItemCondCost.TRANSACTIONS_PROP.get());
  }
  
  
}