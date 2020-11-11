package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineSchedExcl.eti;GL7LineSchedExcl.eix;GL7LineSchedExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LineSchedExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LineSchedExclVersionList {
  public GL7LineSchedExclVersionListImpl(entity.GL7LineSchedExcl base)  {
    super(base);
  }
  
  public GL7LineSchedExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LineSchedExcl AsOf(java.util.Date date) {
    return (entity.GL7LineSchedExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineExclCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LineSchedExcl.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineSchExclItem> GL7ScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LineSchedExcl.GL7SCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7LineExclCost bean) {
    addToArray(entity.GL7LineSchedExcl.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7ScheduledItems(entity.GL7LineSchExclItem bean) {
    addToArray(entity.GL7LineSchedExcl.GL7SCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineSchedExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LineExclCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7LineSchedExcl.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LineSchExclItemVersionList> getGL7ScheduledItems() {
    return (java.util.List)getArray(entity.GL7LineSchedExcl.GL7SCHEDULEDITEMS_PROP.get());
  }
  
  
}