package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCovItmCov.eti;GL7SublnSchedCovItmCov.eix;GL7SublnSchedCovItmCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnSchedCovItmCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnSchedCovItmCovVersionList {
  public GL7SublnSchedCovItmCovVersionListImpl(entity.GL7SublnSchedCovItmCov base)  {
    super(base);
  }
  
  public GL7SublnSchedCovItmCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnSchedCovItmCov AsOf(java.util.Date date) {
    return (entity.GL7SublnSchedCovItmCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCovItemCovCost> SublnSchedCovItemCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnSchedCovItmCov.SUBLNSCHEDCOVITEMCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnSchedCovItemCovCosts(entity.GL7SublnSchedCovItemCovCost bean) {
    addToArray(entity.GL7SublnSchedCovItmCov.SUBLNSCHEDCOVITEMCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCovItmCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCovItemCovCostVersionList> getSublnSchedCovItemCovCosts() {
    return (java.util.List)getArray(entity.GL7SublnSchedCovItmCov.SUBLNSCHEDCOVITEMCOVCOSTS_PROP.get());
  }
  
  
}