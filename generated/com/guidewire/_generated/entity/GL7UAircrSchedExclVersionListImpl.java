package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedExcl.eti;GL7UAircrSchedExcl.eix;GL7UAircrSchedExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7UAircrSchedExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7UAircrSchedExclVersionList {
  public GL7UAircrSchedExclVersionListImpl(entity.GL7UAircrSchedExcl base)  {
    super(base);
  }
  
  public GL7UAircrSchedExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7UAircrSchedExcl AsOf(java.util.Date date) {
    return (entity.GL7UAircrSchedExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UnmannedAircraftExclCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UAircrSchedExcl.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedExclItem> ScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UAircrSchedExcl.SCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7UnmannedAircraftExclCost bean) {
    addToArray(entity.GL7UAircrSchedExcl.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToScheduledItems(entity.GL7UAircrSchedExclItem bean) {
    addToArray(entity.GL7UAircrSchedExcl.SCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UnmannedAircraftExclCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7UAircrSchedExcl.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UAircrSchedExclItemVersionList> getScheduledItems() {
    return (java.util.List)getArray(entity.GL7UAircrSchedExcl.SCHEDULEDITEMS_PROP.get());
  }
  
  
}