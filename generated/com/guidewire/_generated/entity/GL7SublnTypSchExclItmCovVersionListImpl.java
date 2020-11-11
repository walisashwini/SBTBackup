package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchExclItmCov.eti;GL7SublnTypSchExclItmCov.eix;GL7SublnTypSchExclItmCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnTypSchExclItmCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnTypSchExclItmCovVersionList {
  public GL7SublnTypSchExclItmCovVersionListImpl(entity.GL7SublnTypSchExclItmCov base)  {
    super(base);
  }
  
  public GL7SublnTypSchExclItmCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnTypSchExclItmCov AsOf(java.util.Date date) {
    return (entity.GL7SublnTypSchExclItmCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchExclItemCovCost> SublnTypSchExclItemCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnTypSchExclItmCov.SUBLNTYPSCHEXCLITEMCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnTypSchExclItemCovCosts(entity.GL7SublnTypSchExclItemCovCost bean) {
    addToArray(entity.GL7SublnTypSchExclItmCov.SUBLNTYPSCHEXCLITEMCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchExclItmCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchExclItemCovCostVersionList> getSublnTypSchExclItemCovCosts() {
    return (java.util.List)getArray(entity.GL7SublnTypSchExclItmCov.SUBLNTYPSCHEXCLITEMCOVCOSTS_PROP.get());
  }
  
  
}