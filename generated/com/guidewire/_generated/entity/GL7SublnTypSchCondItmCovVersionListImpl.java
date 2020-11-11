package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCondItmCov.eti;GL7SublnTypSchCondItmCov.eix;GL7SublnTypSchCondItmCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnTypSchCondItmCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnTypSchCondItmCovVersionList {
  public GL7SublnTypSchCondItmCovVersionListImpl(entity.GL7SublnTypSchCondItmCov base)  {
    super(base);
  }
  
  public GL7SublnTypSchCondItmCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnTypSchCondItmCov AsOf(java.util.Date date) {
    return (entity.GL7SublnTypSchCondItmCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCondItemCovCost> SublnTypSchCondItemCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnTypSchCondItmCov.SUBLNTYPSCHCONDITEMCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnTypSchCondItemCovCosts(entity.GL7SublnTypSchCondItemCovCost bean) {
    addToArray(entity.GL7SublnTypSchCondItmCov.SUBLNTYPSCHCONDITEMCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCondItmCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchCondItemCovCostVersionList> getSublnTypSchCondItemCovCosts() {
    return (java.util.List)getArray(entity.GL7SublnTypSchCondItmCov.SUBLNTYPSCHCONDITEMCOVCOSTS_PROP.get());
  }
  
  
}