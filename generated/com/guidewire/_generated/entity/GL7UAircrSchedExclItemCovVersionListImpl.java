package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedExclItemCov.eti;GL7UAircrSchedExclItemCov.eix;GL7UAircrSchedExclItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7UAircrSchedExclItemCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7UAircrSchedExclItemCovVersionList {
  public GL7UAircrSchedExclItemCovVersionListImpl(entity.GL7UAircrSchedExclItemCov base)  {
    super(base);
  }
  
  public GL7UAircrSchedExclItemCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7UAircrSchedExclItemCov AsOf(java.util.Date date) {
    return (entity.GL7UAircrSchedExclItemCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedExclItemCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UAircrSchedExclItemCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7UAircrSchedExclItemCovCost bean) {
    addToArray(entity.GL7UAircrSchedExclItemCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedExclItemCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UAircrSchedExclItemCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7UAircrSchedExclItemCov.COSTS_PROP.get());
  }
  
  
}