package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineSchedCond.eti;GL7SublineSchedCond.eix;GL7SublineSchedCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineSchedCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineSchedCondVersionList {
  public GL7SublineSchedCondVersionListImpl(entity.GL7SublineSchedCond base)  {
    super(base);
  }
  
  public GL7SublineSchedCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublineSchedCond AsOf(java.util.Date date) {
    return (entity.GL7SublineSchedCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineCondCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedCond.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineSchedCondItem> GL7ScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedCond.GL7SCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7SublineCondCost bean) {
    addToArray(entity.GL7SublineSchedCond.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7ScheduledItems(entity.GL7SublineSchedCondItem bean) {
    addToArray(entity.GL7SublineSchedCond.GL7SCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineSchedCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineCondCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7SublineSchedCond.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineSchedCondItemVersionList> getGL7ScheduledItems() {
    return (java.util.List)getArray(entity.GL7SublineSchedCond.GL7SCHEDULEDITEMS_PROP.get());
  }
  
  
}