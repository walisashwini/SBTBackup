package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCovItemCov.eti;GL7UAircrSchedCovItemCov.eix;GL7UAircrSchedCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7UAircrSchedCovItemCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7UAircrSchedCovItemCovVersionList {
  public GL7UAircrSchedCovItemCovVersionListImpl(entity.GL7UAircrSchedCovItemCov base)  {
    super(base);
  }
  
  public GL7UAircrSchedCovItemCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7UAircrSchedCovItemCov AsOf(java.util.Date date) {
    return (entity.GL7UAircrSchedCovItemCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedCovItemCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UAircrSchedCovItemCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7UAircrSchedCovItemCovCost bean) {
    addToArray(entity.GL7UAircrSchedCovItemCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedCovItemCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UAircrSchedCovItemCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7UAircrSchedCovItemCov.COSTS_PROP.get());
  }
  
  
}