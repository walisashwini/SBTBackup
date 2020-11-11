package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedExclItemCov.eti;GL7LocSchedExclItemCov.eix;GL7LocSchedExclItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocSchedExclItemCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocSchedExclItemCovVersionList {
  public GL7LocSchedExclItemCovVersionListImpl(entity.GL7LocSchedExclItemCov base)  {
    super(base);
  }
  
  public GL7LocSchedExclItemCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocSchedExclItemCov AsOf(java.util.Date date) {
    return (entity.GL7LocSchedExclItemCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedExclItemCovCost> LocSchedExclItemCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocSchedExclItemCov.LOCSCHEDEXCLITEMCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToLocSchedExclItemCovCosts(entity.GL7LocSchedExclItemCovCost bean) {
    addToArray(entity.GL7LocSchedExclItemCov.LOCSCHEDEXCLITEMCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedExclItemCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedExclItemCovCostVersionList> getLocSchedExclItemCovCosts() {
    return (java.util.List)getArray(entity.GL7LocSchedExclItemCov.LOCSCHEDEXCLITEMCOVCOSTS_PROP.get());
  }
  
  
}