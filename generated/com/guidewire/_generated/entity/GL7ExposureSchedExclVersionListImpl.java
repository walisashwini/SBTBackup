package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureSchedExcl.eti;GL7ExposureSchedExcl.eix;GL7ExposureSchedExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExposureSchedExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExposureSchedExclVersionList {
  public GL7ExposureSchedExclVersionListImpl(entity.GL7ExposureSchedExcl base)  {
    super(base);
  }
  
  public GL7ExposureSchedExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExposureSchedExcl AsOf(java.util.Date date) {
    return (entity.GL7ExposureSchedExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureExclCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedExcl.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureSchedExclItem> GL7ScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedExcl.GL7SCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7ExposureExclCost bean) {
    addToArray(entity.GL7ExposureSchedExcl.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7ScheduledItems(entity.GL7ExposureSchedExclItem bean) {
    addToArray(entity.GL7ExposureSchedExcl.GL7SCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureSchedExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExposureExclCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7ExposureSchedExcl.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExposureSchedExclItemVersionList> getGL7ScheduledItems() {
    return (java.util.List)getArray(entity.GL7ExposureSchedExcl.GL7SCHEDULEDITEMS_PROP.get());
  }
  
  
}