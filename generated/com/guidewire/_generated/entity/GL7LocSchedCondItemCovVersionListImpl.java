package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCondItemCov.eti;GL7LocSchedCondItemCov.eix;GL7LocSchedCondItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocSchedCondItemCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocSchedCondItemCovVersionList {
  public GL7LocSchedCondItemCovVersionListImpl(entity.GL7LocSchedCondItemCov base)  {
    super(base);
  }
  
  public GL7LocSchedCondItemCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocSchedCondItemCov AsOf(java.util.Date date) {
    return (entity.GL7LocSchedCondItemCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCondItemCovCost> LocSchedCondItemCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocSchedCondItemCov.LOCSCHEDCONDITEMCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToLocSchedCondItemCovCosts(entity.GL7LocSchedCondItemCovCost bean) {
    addToArray(entity.GL7LocSchedCondItemCov.LOCSCHEDCONDITEMCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCondItemCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCondItemCovCostVersionList> getLocSchedCondItemCovCosts() {
    return (java.util.List)getArray(entity.GL7LocSchedCondItemCov.LOCSCHEDCONDITEMCOVCOSTS_PROP.get());
  }
  
  
}