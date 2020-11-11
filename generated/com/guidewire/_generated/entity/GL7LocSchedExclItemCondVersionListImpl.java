package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedExclItemCond.eti;GL7LocSchedExclItemCond.eix;GL7LocSchedExclItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocSchedExclItemCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocSchedExclItemCondVersionList {
  public GL7LocSchedExclItemCondVersionListImpl(entity.GL7LocSchedExclItemCond base)  {
    super(base);
  }
  
  public GL7LocSchedExclItemCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocSchedExclItemCond AsOf(java.util.Date date) {
    return (entity.GL7LocSchedExclItemCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedExclItemCondCost> LocSchedExclItemCondCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocSchedExclItemCond.LOCSCHEDEXCLITEMCONDCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToLocSchedExclItemCondCosts(entity.GL7LocSchedExclItemCondCost bean) {
    addToArray(entity.GL7LocSchedExclItemCond.LOCSCHEDEXCLITEMCONDCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedExclItemCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedExclItemCondCostVersionList> getLocSchedExclItemCondCosts() {
    return (java.util.List)getArray(entity.GL7LocSchedExclItemCond.LOCSCHEDEXCLITEMCONDCOSTS_PROP.get());
  }
  
  
}