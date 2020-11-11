package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UnmannedAircraftCond.eti;GL7UnmannedAircraftCond.eix;GL7UnmannedAircraftCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7UnmannedAircraftCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7UnmannedAircraftCondVersionList {
  public GL7UnmannedAircraftCondVersionListImpl(entity.GL7UnmannedAircraftCond base)  {
    super(base);
  }
  
  public GL7UnmannedAircraftCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7UnmannedAircraftCond AsOf(java.util.Date date) {
    return (entity.GL7UnmannedAircraftCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UnmannedAircraftCondCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UnmannedAircraftCond.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7UnmannedAircraftCondCost bean) {
    addToArray(entity.GL7UnmannedAircraftCond.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UnmannedAircraftCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UnmannedAircraftCondCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7UnmannedAircraftCond.COSTS_PROP.get());
  }
  
  
}