package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineRF.eti;GL7SublineRF.eix;GL7SublineRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineRFVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineRFVersionList {
  public GL7SublineRFVersionListImpl(entity.GL7SublineRF base)  {
    super(base);
  }
  
  public GL7SublineRFVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublineRF AsOf(java.util.Date date) {
    return (entity.GL7SublineRF)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineRF> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}