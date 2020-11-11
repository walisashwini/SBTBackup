package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeRF.eti;GL7SublineTypeRF.eix;GL7SublineTypeRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineTypeRFVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineTypeRFVersionList {
  public GL7SublineTypeRFVersionListImpl(entity.GL7SublineTypeRF base)  {
    super(base);
  }
  
  public GL7SublineTypeRFVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublineTypeRF AsOf(java.util.Date date) {
    return (entity.GL7SublineTypeRF)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeRF> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}