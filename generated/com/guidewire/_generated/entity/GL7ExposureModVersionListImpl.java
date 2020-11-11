package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureMod.eti;GL7ExposureMod.eix;GL7ExposureMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExposureModVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExposureModVersionList {
  public GL7ExposureModVersionListImpl(entity.GL7ExposureMod base)  {
    super(base);
  }
  
  public GL7ExposureModVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExposureMod AsOf(java.util.Date date) {
    return (entity.GL7ExposureMod)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureRF> GL7ExposureRateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureMod.GL7EXPOSURERATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToGL7ExposureRateFactors(entity.GL7ExposureRF bean) {
    addToArray(entity.GL7ExposureMod.GL7EXPOSURERATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureMod> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExposureRFVersionList> getGL7ExposureRateFactors() {
    return (java.util.List)getArray(entity.GL7ExposureMod.GL7EXPOSURERATEFACTORS_PROP.get());
  }
  
  
}