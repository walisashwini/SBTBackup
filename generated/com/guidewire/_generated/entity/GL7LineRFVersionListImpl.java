package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineRF.eti;GL7LineRF.eix;GL7LineRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LineRFVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LineRFVersionList {
  public GL7LineRFVersionListImpl(entity.GL7LineRF base)  {
    super(base);
  }
  
  public GL7LineRFVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LineRF AsOf(java.util.Date date) {
    return (entity.GL7LineRF)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineRF> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}