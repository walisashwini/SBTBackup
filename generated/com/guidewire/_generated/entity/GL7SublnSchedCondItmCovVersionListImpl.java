package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCondItmCov.eti;GL7SublnSchedCondItmCov.eix;GL7SublnSchedCondItmCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnSchedCondItmCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnSchedCondItmCovVersionList {
  public GL7SublnSchedCondItmCovVersionListImpl(entity.GL7SublnSchedCondItmCov base)  {
    super(base);
  }
  
  public GL7SublnSchedCondItmCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnSchedCondItmCov AsOf(java.util.Date date) {
    return (entity.GL7SublnSchedCondItmCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCondItemCovCost> SublnSchedCondItemCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnSchedCondItmCov.SUBLNSCHEDCONDITEMCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnSchedCondItemCovCosts(entity.GL7SublnSchedCondItemCovCost bean) {
    addToArray(entity.GL7SublnSchedCondItmCov.SUBLNSCHEDCONDITEMCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCondItmCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCondItemCovCostVersionList> getSublnSchedCondItemCovCosts() {
    return (java.util.List)getArray(entity.GL7SublnSchedCondItmCov.SUBLNSCHEDCONDITEMCOVCOSTS_PROP.get());
  }
  
  
}