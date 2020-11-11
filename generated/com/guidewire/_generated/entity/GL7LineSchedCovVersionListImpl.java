package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineSchedCov.eti;GL7LineSchedCov.eix;GL7LineSchedCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LineSchedCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LineSchedCovVersionList {
  public GL7LineSchedCovVersionListImpl(entity.GL7LineSchedCov base)  {
    super(base);
  }
  
  public GL7LineSchedCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LineSchedCov AsOf(java.util.Date date) {
    return (entity.GL7LineSchedCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LineSchedCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineSchCovItem> GL7ScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LineSchedCov.GL7SCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7LineCovCost bean) {
    addToArray(entity.GL7LineSchedCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7ScheduledItems(entity.GL7LineSchCovItem bean) {
    addToArray(entity.GL7LineSchedCov.GL7SCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineSchedCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LineCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7LineSchedCov.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LineSchCovItemVersionList> getGL7ScheduledItems() {
    return (java.util.List)getArray(entity.GL7LineSchedCov.GL7SCHEDULEDITEMS_PROP.get());
  }
  
  
}