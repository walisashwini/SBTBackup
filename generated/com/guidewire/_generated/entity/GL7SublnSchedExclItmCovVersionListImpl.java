package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedExclItmCov.eti;GL7SublnSchedExclItmCov.eix;GL7SublnSchedExclItmCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnSchedExclItmCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnSchedExclItmCovVersionList {
  public GL7SublnSchedExclItmCovVersionListImpl(entity.GL7SublnSchedExclItmCov base)  {
    super(base);
  }
  
  public GL7SublnSchedExclItmCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnSchedExclItmCov AsOf(java.util.Date date) {
    return (entity.GL7SublnSchedExclItmCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedExclItemCovCost> SublnSchedExclItemCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnSchedExclItmCov.SUBLNSCHEDEXCLITEMCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnSchedExclItemCovCosts(entity.GL7SublnSchedExclItemCovCost bean) {
    addToArray(entity.GL7SublnSchedExclItmCov.SUBLNSCHEDEXCLITEMCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedExclItmCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedExclItemCovCostVersionList> getSublnSchedExclItemCovCosts() {
    return (java.util.List)getArray(entity.GL7SublnSchedExclItmCov.SUBLNSCHEDEXCLITEMCOVCOSTS_PROP.get());
  }
  
  
}