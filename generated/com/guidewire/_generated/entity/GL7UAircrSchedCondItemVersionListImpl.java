package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCondItem.eti;GL7UAircrSchedCondItem.eix;GL7UAircrSchedCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7UAircrSchedCondItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7UAircrSchedCondItemVersionList {
  public GL7UAircrSchedCondItemVersionListImpl(entity.GL7UAircrSchedCondItem base)  {
    super(base);
  }
  
  public GL7UAircrSchedCondItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7UAircrSchedCondItem AsOf(java.util.Date date) {
    return (entity.GL7UAircrSchedCondItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedCondItemCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UAircrSchedCondItem.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedCondItemCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UAircrSchedCondItem.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7UAircrSchedCondItemCost bean) {
    addToArray(entity.GL7UAircrSchedCondItem.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7UAircrSchedCondItemCov bean) {
    addToArray(entity.GL7UAircrSchedCondItem.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedCondItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UAircrSchedCondItemCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7UAircrSchedCondItem.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UAircrSchedCondItemCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7UAircrSchedCondItem.COVERAGES_PROP.get());
  }
  
  
}