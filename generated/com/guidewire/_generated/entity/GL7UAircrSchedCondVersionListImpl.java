package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCond.eti;GL7UAircrSchedCond.eix;GL7UAircrSchedCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7UAircrSchedCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7UAircrSchedCondVersionList {
  public GL7UAircrSchedCondVersionListImpl(entity.GL7UAircrSchedCond base)  {
    super(base);
  }
  
  public GL7UAircrSchedCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7UAircrSchedCond AsOf(java.util.Date date) {
    return (entity.GL7UAircrSchedCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UnmannedAircraftCondCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UAircrSchedCond.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedCondItem> ScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UAircrSchedCond.SCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7UnmannedAircraftCondCost bean) {
    addToArray(entity.GL7UAircrSchedCond.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToScheduledItems(entity.GL7UAircrSchedCondItem bean) {
    addToArray(entity.GL7UAircrSchedCond.SCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UnmannedAircraftCondCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7UAircrSchedCond.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UAircrSchedCondItemVersionList> getScheduledItems() {
    return (java.util.List)getArray(entity.GL7UAircrSchedCond.SCHEDULEDITEMS_PROP.get());
  }
  
  
}