package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineCond.eti;GL7LineCond.eix;GL7LineCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LineCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LineCondVersionList {
  public GL7LineCondVersionListImpl(entity.GL7LineCond base)  {
    super(base);
  }
  
  public GL7LineCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LineCond AsOf(java.util.Date date) {
    return (entity.GL7LineCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineCondCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LineCond.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7LineCondCost bean) {
    addToArray(entity.GL7LineCond.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LineCondCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7LineCond.COSTS_PROP.get());
  }
  
  
}