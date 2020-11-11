package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeSchedExcl.eti;GL7SublineTypeSchedExcl.eix;GL7SublineTypeSchedExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineTypeSchedExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineTypeSchedExclVersionList {
  public GL7SublineTypeSchedExclVersionListImpl(entity.GL7SublineTypeSchedExcl base)  {
    super(base);
  }
  
  public GL7SublineTypeSchedExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublineTypeSchedExcl AsOf(java.util.Date date) {
    return (entity.GL7SublineTypeSchedExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeExclCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchedExcl.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeSchExclItem> GL7ScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchedExcl.GL7SCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7SublineTypeExclCost bean) {
    addToArray(entity.GL7SublineTypeSchedExcl.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7ScheduledItems(entity.GL7SublineTypeSchExclItem bean) {
    addToArray(entity.GL7SublineTypeSchedExcl.GL7SCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeSchedExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineTypeExclCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchedExcl.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineTypeSchExclItemVersionList> getGL7ScheduledItems() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchedExcl.GL7SCHEDULEDITEMS_PROP.get());
  }
  
  
}