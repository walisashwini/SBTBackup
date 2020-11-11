package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UnmannedAircraftCov.eti;GL7UnmannedAircraftCov.eix;GL7UnmannedAircraftCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7UnmannedAircraftCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7UnmannedAircraftCovVersionList {
  public GL7UnmannedAircraftCovVersionListImpl(entity.GL7UnmannedAircraftCov base)  {
    super(base);
  }
  
  public GL7UnmannedAircraftCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7UnmannedAircraftCov AsOf(java.util.Date date) {
    return (entity.GL7UnmannedAircraftCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UnmannedAircraftCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UnmannedAircraftCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7UnmannedAircraftCovCost bean) {
    addToArray(entity.GL7UnmannedAircraftCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UnmannedAircraftCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UnmannedAircraftCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7UnmannedAircraftCov.COSTS_PROP.get());
  }
  
  
}