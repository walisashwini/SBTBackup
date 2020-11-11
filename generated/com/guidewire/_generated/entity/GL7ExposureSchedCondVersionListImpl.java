package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureSchedCond.eti;GL7ExposureSchedCond.eix;GL7ExposureSchedCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExposureSchedCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExposureSchedCondVersionList {
  public GL7ExposureSchedCondVersionListImpl(entity.GL7ExposureSchedCond base)  {
    super(base);
  }
  
  public GL7ExposureSchedCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExposureSchedCond AsOf(java.util.Date date) {
    return (entity.GL7ExposureSchedCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureCondCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedCond.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureSchedCondItem> GL7ScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedCond.GL7SCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7ExposureCondCost bean) {
    addToArray(entity.GL7ExposureSchedCond.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7ScheduledItems(entity.GL7ExposureSchedCondItem bean) {
    addToArray(entity.GL7ExposureSchedCond.GL7SCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureSchedCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExposureCondCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7ExposureSchedCond.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExposureSchedCondItemVersionList> getGL7ScheduledItems() {
    return (java.util.List)getArray(entity.GL7ExposureSchedCond.GL7SCHEDULEDITEMS_PROP.get());
  }
  
  
}