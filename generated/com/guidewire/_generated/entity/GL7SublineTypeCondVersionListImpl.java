package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeCond.eti;GL7SublineTypeCond.eix;GL7SublineTypeCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineTypeCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineTypeCondVersionList {
  public GL7SublineTypeCondVersionListImpl(entity.GL7SublineTypeCond base)  {
    super(base);
  }
  
  public GL7SublineTypeCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublineTypeCond AsOf(java.util.Date date) {
    return (entity.GL7SublineTypeCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeCondCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeCond.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7SublineTypeCondCost bean) {
    addToArray(entity.GL7SublineTypeCond.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineTypeCondCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7SublineTypeCond.COSTS_PROP.get());
  }
  
  
}