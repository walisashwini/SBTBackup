package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedExclItem.eti;GL7UAircrSchedExclItem.eix;GL7UAircrSchedExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7UAircrSchedExclItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7UAircrSchedExclItemVersionList {
  public GL7UAircrSchedExclItemVersionListImpl(entity.GL7UAircrSchedExclItem base)  {
    super(base);
  }
  
  public GL7UAircrSchedExclItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7UAircrSchedExclItem AsOf(java.util.Date date) {
    return (entity.GL7UAircrSchedExclItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedExclItemCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UAircrSchedExclItem.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedExclItemCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UAircrSchedExclItem.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7UAircrSchedExclItemCost bean) {
    addToArray(entity.GL7UAircrSchedExclItem.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7UAircrSchedExclItemCov bean) {
    addToArray(entity.GL7UAircrSchedExclItem.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedExclItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UAircrSchedExclItemCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7UAircrSchedExclItem.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UAircrSchedExclItemCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7UAircrSchedExclItem.COVERAGES_PROP.get());
  }
  
  
}