package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeSchedCond.eti;GL7SublineTypeSchedCond.eix;GL7SublineTypeSchedCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineTypeSchedCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineTypeSchedCondVersionList {
  public GL7SublineTypeSchedCondVersionListImpl(entity.GL7SublineTypeSchedCond base)  {
    super(base);
  }
  
  public GL7SublineTypeSchedCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublineTypeSchedCond AsOf(java.util.Date date) {
    return (entity.GL7SublineTypeSchedCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeCondCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchedCond.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeSchCondItem> GL7ScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchedCond.GL7SCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7SublineTypeCondCost bean) {
    addToArray(entity.GL7SublineTypeSchedCond.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7ScheduledItems(entity.GL7SublineTypeSchCondItem bean) {
    addToArray(entity.GL7SublineTypeSchedCond.GL7SCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeSchedCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineTypeCondCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchedCond.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineTypeSchCondItemVersionList> getGL7ScheduledItems() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchedCond.GL7SCHEDULEDITEMS_PROP.get());
  }
  
  
}