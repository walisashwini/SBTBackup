package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7Transaction.eti;GL7Transaction.eix;GL7Transaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7TransactionVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7TransactionVersionList {
  public GL7TransactionVersionListImpl(entity.GL7Transaction base)  {
    super(base);
  }
  
  public GL7TransactionVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7Transaction AsOf(java.util.Date date) {
    return (entity.GL7Transaction)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7Transaction> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}