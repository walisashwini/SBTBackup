package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureCovCost.eti;GL7ExposureCovCost.eix;GL7ExposureCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExposureCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExposureCovCostVersionList {
  public GL7ExposureCovCostVersionListImpl(entity.GL7ExposureCovCost base)  {
    super(base);
  }
  
  public GL7ExposureCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExposureCovCost AsOf(java.util.Date date) {
    return (entity.GL7ExposureCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7Transaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.GL7Transaction bean) {
    addToArray(entity.GL7ExposureCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7TransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.GL7ExposureCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}