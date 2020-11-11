package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCovItmCov.eti;GL7SublnTypSchCovItmCov.eix;GL7SublnTypSchCovItmCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnTypSchCovItmCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnTypSchCovItmCovVersionList {
  public GL7SublnTypSchCovItmCovVersionListImpl(entity.GL7SublnTypSchCovItmCov base)  {
    super(base);
  }
  
  public GL7SublnTypSchCovItmCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnTypSchCovItmCov AsOf(java.util.Date date) {
    return (entity.GL7SublnTypSchCovItmCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCovItemCovCost> SublnTypSchCovItemCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnTypSchCovItmCov.SUBLNTYPSCHCOVITEMCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnTypSchCovItemCovCosts(entity.GL7SublnTypSchCovItemCovCost bean) {
    addToArray(entity.GL7SublnTypSchCovItmCov.SUBLNTYPSCHCOVITEMCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCovItmCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchCovItemCovCostVersionList> getSublnTypSchCovItemCovCosts() {
    return (java.util.List)getArray(entity.GL7SublnTypSchCovItmCov.SUBLNTYPSCHCOVITEMCOVCOSTS_PROP.get());
  }
  
  
}