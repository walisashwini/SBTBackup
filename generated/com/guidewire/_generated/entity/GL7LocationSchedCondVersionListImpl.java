package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationSchedCond.eti;GL7LocationSchedCond.eix;GL7LocationSchedCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocationSchedCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocationSchedCondVersionList {
  public GL7LocationSchedCondVersionListImpl(entity.GL7LocationSchedCond base)  {
    super(base);
  }
  
  public GL7LocationSchedCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocationSchedCond AsOf(java.util.Date date) {
    return (entity.GL7LocationSchedCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationCondCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCond.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationSchedCondItem> GL7ScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCond.GL7SCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7LocationCondCost bean) {
    addToArray(entity.GL7LocationSchedCond.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7ScheduledItems(entity.GL7LocationSchedCondItem bean) {
    addToArray(entity.GL7LocationSchedCond.GL7SCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationSchedCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocationCondCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7LocationSchedCond.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocationSchedCondItemVersionList> getGL7ScheduledItems() {
    return (java.util.List)getArray(entity.GL7LocationSchedCond.GL7SCHEDULEDITEMS_PROP.get());
  }
  
  
}