package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCondItemCondCost.eti;GL7SublnTypSchCondItemCondCost.eix;GL7SublnTypSchCondItemCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnTypSchCondItemCondCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnTypSchCondItemCondCostVersionList {
  public GL7SublnTypSchCondItemCondCostVersionListImpl(entity.GL7SublnTypSchCondItemCondCost base)  {
    super(base);
  }
  
  public GL7SublnTypSchCondItemCondCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnTypSchCondItemCondCost AsOf(java.util.Date date) {
    return (entity.GL7SublnTypSchCondItemCondCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7Transaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnTypSchCondItemCondCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.GL7Transaction bean) {
    addToArray(entity.GL7SublnTypSchCondItemCondCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCondItemCondCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7TransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.GL7SublnTypSchCondItemCondCost.TRANSACTIONS_PROP.get());
  }
  
  
}