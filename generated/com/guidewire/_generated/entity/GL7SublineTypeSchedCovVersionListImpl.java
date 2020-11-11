package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeSchedCov.eti;GL7SublineTypeSchedCov.eix;GL7SublineTypeSchedCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineTypeSchedCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineTypeSchedCovVersionList {
  public GL7SublineTypeSchedCovVersionListImpl(entity.GL7SublineTypeSchedCov base)  {
    super(base);
  }
  
  public GL7SublineTypeSchedCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublineTypeSchedCov AsOf(java.util.Date date) {
    return (entity.GL7SublineTypeSchedCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchedCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeSchCovItem> GL7ScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchedCov.GL7SCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7SublineTypeCovCost bean) {
    addToArray(entity.GL7SublineTypeSchedCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7ScheduledItems(entity.GL7SublineTypeSchCovItem bean) {
    addToArray(entity.GL7SublineTypeSchedCov.GL7SCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeSchedCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineTypeCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchedCov.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineTypeSchCovItemVersionList> getGL7ScheduledItems() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchedCov.GL7SCHEDULEDITEMS_PROP.get());
  }
  
  
}