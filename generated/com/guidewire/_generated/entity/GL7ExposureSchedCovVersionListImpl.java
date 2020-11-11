package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureSchedCov.eti;GL7ExposureSchedCov.eix;GL7ExposureSchedCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExposureSchedCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExposureSchedCovVersionList {
  public GL7ExposureSchedCovVersionListImpl(entity.GL7ExposureSchedCov base)  {
    super(base);
  }
  
  public GL7ExposureSchedCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExposureSchedCov AsOf(java.util.Date date) {
    return (entity.GL7ExposureSchedCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureSchedCovItem> GL7ScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedCov.GL7SCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7ExposureCovCost bean) {
    addToArray(entity.GL7ExposureSchedCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7ScheduledItems(entity.GL7ExposureSchedCovItem bean) {
    addToArray(entity.GL7ExposureSchedCov.GL7SCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureSchedCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExposureCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7ExposureSchedCov.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExposureSchedCovItemVersionList> getGL7ScheduledItems() {
    return (java.util.List)getArray(entity.GL7ExposureSchedCov.GL7SCHEDULEDITEMS_PROP.get());
  }
  
  
}