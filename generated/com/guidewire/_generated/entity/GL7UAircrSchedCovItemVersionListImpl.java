package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCovItem.eti;GL7UAircrSchedCovItem.eix;GL7UAircrSchedCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7UAircrSchedCovItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7UAircrSchedCovItemVersionList {
  public GL7UAircrSchedCovItemVersionListImpl(entity.GL7UAircrSchedCovItem base)  {
    super(base);
  }
  
  public GL7UAircrSchedCovItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7UAircrSchedCovItem AsOf(java.util.Date date) {
    return (entity.GL7UAircrSchedCovItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedCovItemCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UAircrSchedCovItem.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedCovItemCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UAircrSchedCovItem.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7UAircrSchedCovItemCost bean) {
    addToArray(entity.GL7UAircrSchedCovItem.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7UAircrSchedCovItemCov bean) {
    addToArray(entity.GL7UAircrSchedCovItem.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedCovItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UAircrSchedCovItemCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7UAircrSchedCovItem.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UAircrSchedCovItemCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7UAircrSchedCovItem.COVERAGES_PROP.get());
  }
  
  
}