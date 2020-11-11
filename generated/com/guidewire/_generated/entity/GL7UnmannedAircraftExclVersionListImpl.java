package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UnmannedAircraftExcl.eti;GL7UnmannedAircraftExcl.eix;GL7UnmannedAircraftExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7UnmannedAircraftExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7UnmannedAircraftExclVersionList {
  public GL7UnmannedAircraftExclVersionListImpl(entity.GL7UnmannedAircraftExcl base)  {
    super(base);
  }
  
  public GL7UnmannedAircraftExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7UnmannedAircraftExcl AsOf(java.util.Date date) {
    return (entity.GL7UnmannedAircraftExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UnmannedAircraftExclCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UnmannedAircraftExcl.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7UnmannedAircraftExclCost bean) {
    addToArray(entity.GL7UnmannedAircraftExcl.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UnmannedAircraftExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UnmannedAircraftExclCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7UnmannedAircraftExcl.COSTS_PROP.get());
  }
  
  
}