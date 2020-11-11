package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureRF.eti;GL7ExposureRF.eix;GL7ExposureRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExposureRFVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExposureRFVersionList {
  public GL7ExposureRFVersionListImpl(entity.GL7ExposureRF base)  {
    super(base);
  }
  
  public GL7ExposureRFVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExposureRF AsOf(java.util.Date date) {
    return (entity.GL7ExposureRF)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureRF> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}