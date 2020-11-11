package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCov.eti;GL7UAircrSchedCov.eix;GL7UAircrSchedCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7UAircrSchedCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7UAircrSchedCovVersionList {
  public GL7UAircrSchedCovVersionListImpl(entity.GL7UAircrSchedCov base)  {
    super(base);
  }
  
  public GL7UAircrSchedCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7UAircrSchedCov AsOf(java.util.Date date) {
    return (entity.GL7UAircrSchedCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UnmannedAircraftCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UAircrSchedCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedCovItem> ScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UAircrSchedCov.SCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7UnmannedAircraftCovCost bean) {
    addToArray(entity.GL7UAircrSchedCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToScheduledItems(entity.GL7UAircrSchedCovItem bean) {
    addToArray(entity.GL7UAircrSchedCov.SCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UnmannedAircraftCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7UAircrSchedCov.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UAircrSchedCovItemVersionList> getScheduledItems() {
    return (java.util.List)getArray(entity.GL7UAircrSchedCov.SCHEDULEDITEMS_PROP.get());
  }
  
  
}