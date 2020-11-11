package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineCond.eti;GL7SublineCond.eix;GL7SublineCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineCondVersionList {
  public GL7SublineCondVersionListImpl(entity.GL7SublineCond base)  {
    super(base);
  }
  
  public GL7SublineCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublineCond AsOf(java.util.Date date) {
    return (entity.GL7SublineCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineCondCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineCond.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7SublineCondCost bean) {
    addToArray(entity.GL7SublineCond.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineCondCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7SublineCond.COSTS_PROP.get());
  }
  
  
}