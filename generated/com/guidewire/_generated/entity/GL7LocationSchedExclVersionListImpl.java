package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationSchedExcl.eti;GL7LocationSchedExcl.eix;GL7LocationSchedExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocationSchedExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocationSchedExclVersionList {
  public GL7LocationSchedExclVersionListImpl(entity.GL7LocationSchedExcl base)  {
    super(base);
  }
  
  public GL7LocationSchedExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocationSchedExcl AsOf(java.util.Date date) {
    return (entity.GL7LocationSchedExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationExclCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedExcl.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationSchedExclItem> GL7ScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedExcl.GL7SCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7LocationExclCost bean) {
    addToArray(entity.GL7LocationSchedExcl.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7ScheduledItems(entity.GL7LocationSchedExclItem bean) {
    addToArray(entity.GL7LocationSchedExcl.GL7SCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationSchedExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocationExclCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7LocationSchedExcl.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocationSchedExclItemVersionList> getGL7ScheduledItems() {
    return (java.util.List)getArray(entity.GL7LocationSchedExcl.GL7SCHEDULEDITEMS_PROP.get());
  }
  
  
}