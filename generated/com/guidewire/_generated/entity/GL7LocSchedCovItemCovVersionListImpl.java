package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCovItemCov.eti;GL7LocSchedCovItemCov.eix;GL7LocSchedCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocSchedCovItemCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocSchedCovItemCovVersionList {
  public GL7LocSchedCovItemCovVersionListImpl(entity.GL7LocSchedCovItemCov base)  {
    super(base);
  }
  
  public GL7LocSchedCovItemCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocSchedCovItemCov AsOf(java.util.Date date) {
    return (entity.GL7LocSchedCovItemCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCovItemCovCost> LocSchedCovItemCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocSchedCovItemCov.LOCSCHEDCOVITEMCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToLocSchedCovItemCovCosts(entity.GL7LocSchedCovItemCovCost bean) {
    addToArray(entity.GL7LocSchedCovItemCov.LOCSCHEDCOVITEMCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCovItemCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCovItemCovCostVersionList> getLocSchedCovItemCovCosts() {
    return (java.util.List)getArray(entity.GL7LocSchedCovItemCov.LOCSCHEDCOVITEMCOVCOSTS_PROP.get());
  }
  
  
}