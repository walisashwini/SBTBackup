package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationSchedCov.eti;GL7LocationSchedCov.eix;GL7LocationSchedCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocationSchedCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocationSchedCovVersionList {
  public GL7LocationSchedCovVersionListImpl(entity.GL7LocationSchedCov base)  {
    super(base);
  }
  
  public GL7LocationSchedCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocationSchedCov AsOf(java.util.Date date) {
    return (entity.GL7LocationSchedCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationSchedCovItem> GL7ScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCov.GL7SCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7LocationCovCost bean) {
    addToArray(entity.GL7LocationSchedCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7ScheduledItems(entity.GL7LocationSchedCovItem bean) {
    addToArray(entity.GL7LocationSchedCov.GL7SCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationSchedCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocationCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7LocationSchedCov.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocationSchedCovItemVersionList> getGL7ScheduledItems() {
    return (java.util.List)getArray(entity.GL7LocationSchedCov.GL7SCHEDULEDITEMS_PROP.get());
  }
  
  
}