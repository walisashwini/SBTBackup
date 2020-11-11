package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineSchedCond.eti;GL7LineSchedCond.eix;GL7LineSchedCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LineSchedCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LineSchedCondVersionList {
  public GL7LineSchedCondVersionListImpl(entity.GL7LineSchedCond base)  {
    super(base);
  }
  
  public GL7LineSchedCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LineSchedCond AsOf(java.util.Date date) {
    return (entity.GL7LineSchedCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineCondCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LineSchedCond.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineSchCondItem> GL7ScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LineSchedCond.GL7SCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7LineCondCost bean) {
    addToArray(entity.GL7LineSchedCond.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7ScheduledItems(entity.GL7LineSchCondItem bean) {
    addToArray(entity.GL7LineSchedCond.GL7SCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineSchedCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LineCondCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7LineSchedCond.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LineSchCondItemVersionList> getGL7ScheduledItems() {
    return (java.util.List)getArray(entity.GL7LineSchedCond.GL7SCHEDULEDITEMS_PROP.get());
  }
  
  
}